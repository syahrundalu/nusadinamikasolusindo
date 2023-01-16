<?php 
//Mail sending function
$subject = $_POST['name'];
$receiving_email_address = 'admin@nusa-solusindo.com';
$from = $_POST['email'];

//data
$message = $_POST['message'];       

ini_set("SMTP","srv163.niagahoster.com");
ini_set("smtp_port","993");

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;

mail($from,$subject,$message,$headers);
echo 'Mail Sent. Thanks For Contact Us';
?>