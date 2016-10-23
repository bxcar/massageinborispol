<?php
/**
 * Created by PhpStorm.
 * User: 1
 * Date: 22.10.2016
 * Time: 2:38
 */

//if (array_key_exists('messageFF', $_POST)) {
	$to = 'awesomegame47@gmail.com';
	$subject = 'Заполнена контактная форма с '.$_SERVER['HTTP_REFERER'];
	$subject = "=?utf-8?b?". base64_encode($subject) ."?=";
	$message = "\nEmail: ".$_POST['contactFF']."\nIP: ".$_SERVER['REMOTE_ADDR']."\nСообщение: ".$_POST['messageFF'];
	$headers = 'Content-type: text/plain; charset="utf-8"';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: ". date('D, d M Y h:i:s O') ."\r\n";
	mail($to, $subject, $message, $headers);
	echo $_POST['contactFF'];
//}
	/*$to      = 'awesomegame47@gmail.com';
	$subject = 'Заполнена контактная форма с ';
	$message = "hello";
	$headers = 'Content-type: text/plain; charset="utf-8"';
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Date: " . date('D, d M Y h:i:s O') . "\r\n";
	if (mail($to, $subject, $message, $headers)) {
		echo "Luck";
	}
	else {
		echo "unluck";
	}*/
