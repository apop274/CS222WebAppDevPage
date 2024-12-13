<?php
include 'db_connection3.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    if (empty($email) || empty($password)) {
        header("Location: ../login_error.html");
        exit();
    }

    $sql = "SELECT id, password FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        header("Location: ../login_error.html");
        exit();
    }

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 1) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id'];
            header("Location: ../login_success.html");
            exit();
        } else {
            header("Location: ../login_error.html");
            exit();
        }
    } else {
        header("Location: ../login_error.html");
        exit();
    }

    $stmt->close();
}
$conn->close();
?>
