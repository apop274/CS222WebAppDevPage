<?php
include 'db_connection3.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  
    $muscle_group = htmlspecialchars(trim($_POST['muscle_group']));

    if (empty($muscle_group)) {
        die("Please select a muscle group.");
    }


    $sql = "SELECT activity FROM exercises WHERE muscle_group = ?";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Database error: " . $conn->error);
    }

    $stmt->bind_param("s", $muscle_group);
    $stmt->execute();
    $result = $stmt->get_result();

    // Display the exercises
    echo "<h1>Exercises for $muscle_group</h1>";
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "<p>" . htmlspecialchars($row['activity']) . "</p>";
        }
    } else {
        echo "<p>No exercises found for $muscle_group.</p>";
    }

   
    $stmt->close();
}
$conn->close();
?>
