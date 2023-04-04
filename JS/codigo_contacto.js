// Espera para que todos los elementos de la página se carguen para continuar el script
if(document.readyState =='loading'){
  document.addEventListener('DOMContentLoaded',ready)
}else{
  ready();
}

function ready(){
  var form = document.getElementById("contact-form");

  // Agregar un evento "submit" al formulario
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (submit y recargar la página)
  
    // Obtencion de los valores de los campos del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var city = document.getElementById("city").value;
    var message = document.getElementById("message").value;
  
    // Envia un mensaje para demostrar el correcto funcionamiento
    alert("Tu mensaje se ha enviado correctamente");
  
    // Resetea los valores del formulario
    form.reset();
  });
}