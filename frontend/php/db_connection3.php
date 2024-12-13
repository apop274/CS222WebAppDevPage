<?php
$servername = "server137.web-hosting.com";
$username = "apopfxis_admin2";
$password = "Yoshyosh1!";
$dbname = "apopfxis_fitness_aide";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
