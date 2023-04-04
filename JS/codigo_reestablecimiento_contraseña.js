// Espera para que todos los elementos de la página se carguen para continuar el script
if(document.readyState =='loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready();
}

// Función para mostrar mensaje de confirmacion del ingreso correcto del email
function ready() {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Se ha enviado el enlace de restablecimiento a su correo");

    // Resetea los valores del formulario
    form.reset();
  });
}
