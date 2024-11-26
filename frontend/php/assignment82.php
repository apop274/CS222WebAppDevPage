<?php
// Capture user input and validate it
if (isset($_POST['number']) && is_numeric($_POST['number'])) {
    $number = (int)$_POST['number'];
    // Convert number to binary
    $binary = decbin($number);
} else {
    $binary = "Invalid input";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Binary Conversion Result</title>
</head>
<body>
    <h2>Binary Conversion Result</h2>
    <p><?php echo htmlspecialchars($binary); ?></p>
    
</body>
</html>
