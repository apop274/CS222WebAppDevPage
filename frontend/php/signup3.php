<?php
include 'db_connection3.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $firstname = htmlspecialchars(trim($_POST['firstname']));
    $lastname = htmlspecialchars(trim($_POST['lastname']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    if (empty($firstname) || empty($lastname) || empty($email) || empty($password)) {
        header("Location: ../signup_error.html");
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: ../signup_error.html");
        exit();
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        header("Location: ../signup_error.html");
        exit();
    }

    $stmt->bind_param("ssss", $firstname, $lastname, $email, $hashed_password);

    if ($stmt->execute()) {
        header("Location: ../signup_success.html");
        exit();
    } else {
        header("Location: ../signup_error.html");
        exit();
    }

    $stmt->close();
}
$conn->close();
?>
