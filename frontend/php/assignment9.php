<?php
// Define constants and website data
define("CATEGORY_BOOKS", "Books");
define("CATEGORY_COMPUTERS", "Computers");
define("CATEGORY_MUSIC", "Music");

$websites = [
    CATEGORY_BOOKS => ["www.electricliterature.com", "www.goodreads.com", "www.lithub.com", "www.bookriot.com"],
    CATEGORY_COMPUTERS => ["www.techradar.com", "www.cnet.com", "www.computerworld.com", "www.pcworld.com"],
    CATEGORY_MUSIC => ["www.itunes.com", "www.sparks.com", "www.kiss.com"]
];

// Capture form input
$name = $_POST['name'] ?? "User";
$email = $_POST['email'] ?? "";
$category = $_POST['category'] ?? "";

// Validate email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $emailMessage = "Thank you for supplying a valid email address: $email";
} else {
    $emailMessage = "It appears that you have not entered a valid email address: $email";
}

// Get websites for the selected category
$selectedWebsites = $websites[$category] ?? [];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Websites of Interest</title>
</head>
<body>
    <h2>Hello <?php echo htmlspecialchars($name); ?>,</h2>
    <p><?php echo htmlspecialchars($emailMessage); ?></p>
    <p>Here is a list of <?php echo htmlspecialchars(strtolower($category)); ?> websites that might be of interest to you!</p>
    <ul>
        <?php foreach ($selectedWebsites as $website): ?>
            <li><?php echo htmlspecialchars($website); ?></li>
        <?php endforeach; ?>
    </ul>
    
</body>
</html>
