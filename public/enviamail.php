<?php

if(isset($_POST["correo"]) && !empty($_POST["correo"])){
  $destinoMail = "gabrielzavando@gmail.com";
  $asunto = "Contacto desde la web";

  $nombre = $_POST["nombre"];
  $pais = $_POST["pais"];
  $correo = $_POST["correo"];

  $carta = "De: $nombre \n";
  $carta .= "Correo: $correo \n";
  $carta .= "País: $pais \n";
  $carta .= "Mensaje: $mensaje";

  mail($destinoMail, $asunto, $carta);

  return print("ok");
}

return print("No se puede enviar");

?>
