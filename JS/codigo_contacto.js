$("#contact-form").submit(function(event) {
  // Evita el envío del formulario por defecto
  event.preventDefault();

  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var city = $("#city").val();
  var message = $("#message").val();

  // Verifica si el nombre es válido según el patrón establecido
  if (!/^[a-zA-Z\s]{5,100}$/.test(name)) {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  // Verifica si el correo electrónico es válido según el patrón establecido
  if (!/^[a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo|)[.]com|cl$/.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  // Verifica si el número de teléfono es válido según el patrón establecido
  if (!/^\d{9}$/.test(phone)) {
    alert("Por favor, ingrese un número de teléfono válido de 9 dígitos.");
    return;
  }

  // Verifica si la ciudad es válido según el patrón establecido
  if (!/^[a-zA-Z\s\-']+$/.test(city)) {
    alert("Por favor, ingrese una ciudad válido.");
    return;
  }

  // Verifica si el campo está vacío
  if (message.length == 0 || message.length <= 10 || message.length >= 120) {
    if (message.length == 0) {
      ("#message-error").text("Por favor, ingrese su mensaje");
      $("#message-error").show();
    } else if (message.length <= 10) {
      $("#message-error").text("El mensaje debe tener al menos 10 caracteres");
      $("#message-error").show();
    } else if (message.length >= 120) {
      $("#message-error").text("El mensaje no puede tener más de 120 caracteres");
      $("#message-error").show();
    } else {
      $("#message-error").hide();
    }
    return;
  }

  // Si los campos son validos, envía el formulario
  alert("El formulario se ha enviado correctamente.");
  this.submit();
});

// Mostrar mensaje de error de name
$("#name").on("invalid", function(event) {
  event.preventDefault();
  $("#name-error").text("Por favor, ingrese un nombre válido.");
  $("#name-error").show();
});

// Mostrar mensaje de error de email
$("#email").on("invalid", function(event) {
  event.preventDefault();
  $("#email-error").text("Por favor, ingrese un correo electrónico válido.");
  $("#email-error").show();
});

// Mostrar mensaje de error de email
$("#phone").on("invalid", function(event) {
  event.preventDefault();
  $("#phone-error").text("Por favor, ingrese un número teléfonico válido.");
  $("#phone-error").show();
});

// Mostrar mensaje de error de city
$("#city").on("invalid", function(event) {
  event.preventDefault();
  $("#city-error").text("Por favor, ingrese una ciudad válida.");
  $("#city-error").show();
});

// Ocultar mensaje de error al corregir el nombre
$("#name").on("input", function() {
  if ($("#name")[0].checkValidity()) {
    $("#name-error").hide();
  }
});

// Ocultar mensaje de error al corregir el email
$("#email").on("input", function() {
  if ($("#email")[0].checkValidity()) {
    $("#email-error").hide();
  }
});

// Ocultar mensaje de error al corregir el teléfono
$("#phone").on("input", function() {
  if ($("#phone")[0].checkValidity()) {
    $("#phone-error").hide();
  }
});

// Ocultar mensaje de error al corregir la ciudad
$("#city").on("input", function() {
  if ($("#city")[0].checkValidity()) {
    $("#city-error").hide();
  }
});


$("#contact-form").validate({
  rules: {
    name: {
      required: true,
      minlength: 20,
      maxlength: 80,
      pattern: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/
    },
    email: {
      required: true,
      minlength: 15,
      maxlength: 50,
      email: true,
      pattern: /^([a-zA-Z0-9._%+-]+@(gmail|hotmail|yahoo)\.(com|cl|hotmail|yahoo))$/
    },
    phone: {
      required: true,
      minlength: 9,
      maxlength: 9,
      pattern: /^\d{9}$/
    },
    city: {
      required: true,
      minlength: 10,
      maxlength: 50,
      pattern: /^[a-zA-Z\s\-']+$/
    },
    message: {
      required: true,
      minlength: 10,
      maxlength: 120,
    }
  },
  messages: {
    name: {
      required: "Por favor, ingrese su nombre completo",
      minlength: "El nombre completo debe tener al menos 20 caracteres",
      maxlength: "El nombre completo no puede tener más de 80 caracteres",
      pattern: "El nombre solo puede contener letras, espacios y acentos"
    },
    email: {
      required: "Por favor, ingrese su correo electrónico completo",
      minlength: "El correo electrónico debe tener al menos 15 caracteres",
      maxlength: "El correo electrónico no puede tener más de 50 caracteres",
      email: "Por favor ingrese un correo electrónico valido",
      pattern: "Por favor ingrese un correo electrónico con una extensión válida (.com, .cl, .hotmail, .yahoo)"
    },
    phone: {
      required: "Por favor, ingrese su número teléfonico completo",
      minlength: "El número teléfonico debe tener un minimo de 9 números",
      minlength: "El número teléfonico debe tener un máximo de 9 números",
      pattern: "El número teléfonico solo puede contener números"
    },
    city: {
      required: "Por favor, ingrese su ciudad",
      minlength: "La ciudad debe tener al menos 10 caracteres",
      maxlength: "La ciudad no puede tener más de 50 caracteres",
      pattern: "Por favor ingrese una ciudad válida"
    },
    message: {
      required: "Por favor, ingrese su mensaje",
      minlength: "El mensaje debe tener al menos 10 caracteres",
      maxlength: "El mensaje no puede tener más de 120 caracteres"
    }
  },
  submitHandler: function(form) {
    alert("El formulario se ha enviado correctamente.");
    form.submit();
  }
});