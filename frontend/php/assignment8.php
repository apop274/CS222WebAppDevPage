<?php
// Correct answers for reference
$correctAnswers = [
    "question1" => "genius",
    "question2" => "14"
];

// Capture user answers
$userAnswers = [
    "question1" => $_POST['question1'] ?? null,
    "question2" => $_POST['question2'] ?? null
];

$feedback = [];
foreach ($userAnswers as $question => $answer) {
    if ($answer === $correctAnswers[$question]) {
        $feedback[] = "($question) You answered correctly.";
    } else {
        $feedback[] = "($question) Your answer is incorrect.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz Results</title>
</head>
<body>
    <h2>Your Results</h2>
    <?php foreach ($feedback as $message): ?>
        <p><?php echo $message; ?></p>
    <?php endforeach; ?>
</body>
</html>
