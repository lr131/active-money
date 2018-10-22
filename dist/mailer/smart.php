<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lr131@yandex.ru';                 // Наш логин
$mail->Password = 'uthjy123';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('lr131@yandex.ru', 'Привет от диплома!');   // От кого письмо 
$mail->addAddress('kretivykh@yandex.ru');     // Add a recipient
$mail->addAddress('lr131k@gmail.com');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Active Money на связи';
$mail->Body    = '
	Поступил запрос на звонок <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>