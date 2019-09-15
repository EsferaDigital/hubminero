<?php

if(isset($_POST["email"]) && !empty($_POST["email"])){
  $destinoMail = "gabrielzavando@gmail.com";
  $asunto = "Contacto desde la web";

  $name = $_POST["name"];
  $empresa = $_POST["empresa"];
  $nameempresa = $_POST["company"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $mensaje = $_POST["message"];

  $carta = "De: $name \n";
  $carta .= "Correo: $email \n";
  $carta .= "Teléfono: $phone \n";
  $carta .= "Tipo de empresa: $empresa \n";
  $carta .= "Nombre de la empresa: $nameempresa \n";
  $carta .= "Mensaje: $mensaje";

  print_r($carta);

  mail($destinoMail, $asunto, $carta);

  return print("ok");
}

return print("No se puede enviar");

?>