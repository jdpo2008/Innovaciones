<?php 
$to = "jdpo2008@gmail.com";
$subject = $_POST['asunto'];

$headers = "From: " . strip_tags($_POST['email']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['email']) . "\r\n";
$headers .= "CC: rdaniel@gamil.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$message = '<html><body>';
$message .= '<table style="border-color: #666;">';
$message .= "<tr style='background: #eee;'><td>El Siguiente usuario le ha dejado un mesaje para que lo contacte</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Nombre:</strong> </td><td>" . strip_tags($_POST['firstName']) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Apellido:</strong> </td><td>" . strip_tags($_POST['lastName']) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Celular:</strong> </td><td>" . strip_tags($_POST['celular']) . "</td></tr>";
$message .= "<tr style='background: #eee;'><td><strong>Telefono:</strong> </td><td>" . strip_tags($_POST['telefono']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td>Y le ha dejado el siguiente mensaje para su lectura</td></tr>";
$message .= "<tr><td><strong>Mensaje:</strong> </td><td>" . strip_tags($_POST['address']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";

$Response = new stdClass();

if (mail($to,$subject,$message,$headers)) {
    $Response->mensaje = 'Tu mensaje fue enviado correctamente.';
    $Response->ok = true;
    $jsonResponse = json_encode($Response);
   
} else {
    $Response->mensaje = 'Error al enviar mensaje.';
    $Response->ok = true;
    $jsonResponse = json_encode($Response);
}

echo $jsonResponse;

?>