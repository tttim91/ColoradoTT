<?php

$from="noreply@coloradottguest.com";
$email="coloradotthard@gmail.com";
$subject=$_POST['subject'];
$message=$_POST['message'];

mail ($email, $subject, $message, "From:".$from);

header('Location: ../ThankYou.html');







?>