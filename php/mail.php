<?php
require 'PHPMailer/PHPMailerAutoload.php';

$name = $_POST["name"];
$message = $_POST["message"];
$email = "";
$phone = "";
$email_body = "";
$email_subject = "";

if(isset($_POST["phone"])){
	$phone = $_POST["phone"];
	$email_body = "Name: " . $name .  ", Phone :" . $phone . ", Message: " . $message;
	$email_subject = "Pickup Request : C4D";  
} else {
	$email = $_POST["email"];
	$email_body = "Name: " . $name .  ", Email :" . $email . ", Message: " . $message;
	$email_subject = "Message from Visitor : C4D";  
}


$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.yahoo.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'mamnasimjamaly@yahoo.com';                 // SMTP username
$mail->Password = 'xxxxxxxx';                           // SMTP password
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 25;                                    // TCP port to connect to

$mail->setFrom('mamnasimjamaly@yahoo.com', 'Nasim Jamaly');
$mail->addAddress('mamnasimjamaly@yahoo.com', 'Nasim Jamaly');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $email_subject;
$mail->Body    = $email_body;
$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

if(!$mail->send()) {
    //echo 'Message could not be sent.' . 'Mailer Error: ' . $mail->ErrorInfo;
    echo 0;
} else {
    echo 1;
    //echo true;
}