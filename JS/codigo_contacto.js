$("#contact-form").validate({
  rules:{
    name: {
      required: true,
      minlength: 4,
      maxlength: 30
    }
  },
  messages: {
    name: {
      required: "Por favor, ingrese su nombre completo",
      minlength: "El nombre completo debe tener al menos 40 caracteres",
      maxlength: "El nombre completo no puede tener más de 40 caracteres"
    }
  }
})

// Deshabilitar el botón de envío al cargar la página, para una mejor funcion
$("#submit").prop("disabled", true);
// Funcion para detectar cuando se ingresa información veridica a los campos
$("input, textarea").on("keyup", function() {
  // Verificar si se han completado todos los campos requeridos
  if ($("#contact-form").valid()) {
      // Habilitar el botón de envío
      $("#submit").prop("disabled", false);
  } else {
      // Deshabilitar el botón de envío
      $("#submit").prop("disabled", true);
  }
});


// Funcion que retornara cuando el boton para enviar los datos sea valido

$("#submit").click(function(){
  if($("#contact-form").valid() == false ){
    return;
  }
  let nombre = $("#name").val()
  window.alert("Datos enviados correctamente.");
})