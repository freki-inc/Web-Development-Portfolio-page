<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "willemwebdev@outlook.com"; // User Email Address
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type:text/plain;charset=UTF-8";

    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent!";
    } else {
        echo "Failed to send message.";
    }
}
?>
