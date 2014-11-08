<?php

$name = $_POST['name'];
$mail = $_POST['mail'];
$comment = $_POST['comment'];
$to = "jgonzo127@gmail.com";
$subject = "New Message";

mail ($to, $subject, $comment, "From: " . $name);

echo "Your message has been sent";

?>