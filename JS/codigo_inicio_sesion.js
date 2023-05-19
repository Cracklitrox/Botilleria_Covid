$("#form-login").submit(function(event) {
    // Evita el envío del formulario por defecto
    event.preventDefault();

    // Obtenemos los valores de cada campo a válidar
    var login_field = $("#login_field").val();
    var password = $("#password").val();

    // Verifica si el nombre de usuario cumple con las reglas de longitud
    if (login_field.length < 8 || login_field.length > 30) {
        alert("Por favor, ingrese un nombre de usuario entre 8 y 30 caracteres.");
        return;
    }

    // Verifica si el nombre de usuario es válido según el patrón establecido
    if (!/^[a-zA-Z0-9_]+$/.test(login_field)) {
        alert("Por favor, ingrese un nombre de usuario válido.");
        return;
    }
    
    // Verifica si el nombre de usuario esta vacio
    if (login_field.trim() === "") {
        alert("Por favor, ingrese un nombre de usuario.");
        return;
    }

    // Verifica si la contraseña cumple con la longitud mínima y máxima establecidas
    if (password.length < 8 || password.length > 40) {
        alert("Por favor, ingrese una contraseña que tenga entre 8 y 40 caracteres.");
        return;
    }

    // Verifica si la contraseña es válido según el patrón establecido
    if (!/^[a-zA-Z0-9\s]+$/.test(password)) {
        alert("Por favor, ingrese una contraseña válida.");
        return;
    }

    // Verifica si el campo está vacío
    if (password.trim() === "") {
        alert("Por favor, ingrese su contraseña.");
        return;
    }

    // Si los campos son validos, envía el formulario
    alert("El formulario se ha enviado correctamente.");
    this.submit();
});

// Ocultar mensaje de error al corregir el nombre
$("#login_field").on("input", function() {
    if ($("#login_field")[0].checkValidity()) {
        $("#login_field-error").hide();
    }
});

// Ocultar mensaje de error al corregir el nombre
$("#password").on("input", function() {
    if ($("#password")[0].checkValidity()) {
        $("#password-error").hide();
    }
});

$("#form-login").validate({
    rules: {
        login_field: {
            required: true,
            minlength: 8,
            maxlength: 30,
            pattern: /^[a-zA-Z0-9_]+$/
        },
        password: {
            required: true,
            minlength: 8,
            maxlength: 40,
            pattern: /^[a-zA-Z0-9\s]+$/
        }
    },
    messages: {
        login_field: {
            required: "Por favor, ingrese su nombre de usuario completo",
            minlength: "El nombre de usuario debe tener al menos 8 caracteres",
            maxlength: "El nombre de usuario no puede tener más de 30 caracteres",
            pattern: "El nombre de usuario solo puede contener letras, números y guines bajos"
        },
        password: {
            required: "Por favor, ingrese su contraseña de usuario",
            minlength: "La contraseña debe tener al menos 8 caracteres",
            maxlength: "La contraseña no puede tener más de 40 caracteres",
            pattern: "La contraseña solo puede contener letras, espacios y números"
        }
    },
    submitHandler: function(form) {
        alert("El formulario se ha enviado correctamente.");
        form.submit();
    }
});