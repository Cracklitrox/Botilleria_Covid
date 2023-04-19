// Espera para que todos los elementos de la página se carguen para continuar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// Función para realizar la validación de inicio de sesión
function ready() {
    document.querySelector('form').addEventListener('submit', function(event) {
         // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Obtener los valores ingresados en los campos de usuario y contraseña
        const usernameOrEmail = document.getElementById('login_field').value;
        const password = document.getElementById('password').value;
        const phoneOption = document.querySelector('input[name="phoneOption"]:checked').value;
        let phone = '';

        // Validación si el usuario presiona la casilla "si"
        if (phoneOption === 'si') {
            phone = document.getElementById('phoneInput').value;
            if (phone.length !== 8) {
                alert('Por favor, ingrese un número de teléfono válido.');
                return;
            }
        }
        // Realizar la validación de los datos de inicio de sesión
        // Datos creados por el programador.
        if ((usernameOrEmail === 'Usuario1' || usernameOrEmail === 'correo_usuario1@gmail.com') && password === 'contraseña_usuario1') {
            const username = usernameOrEmail === 'Usuario1' ? 'Usuario1' : 'Usuario';
            // Mensaje para el usuario
            alert(`Bienvenido ${username} a El Barril Selecto`);
             // Redirigir a la página de inicio
            window.location.href = '../index.html';
        } else {
            alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
        }

        // Limpiar los campos de usuario y contraseña
        document.getElementById('login_field').value = '';
        document.getElementById('password').value = '';
        document.getElementById('phoneInput').value = '';
        document.getElementById('phoneField').style.display = 'none';
        document.getElementById('phoneNo').checked = true;
    });

    // Validacion Casillas "Identificacion"
    const checkboxes = document.getElementsByName('validacion-casilla');
    const inputContainer = document.getElementById('validacion-container');
    let selectedCheckbox = null;

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].addEventListener('change', function() {
        if (this.checked) {
          if (selectedCheckbox === null) {
            selectedCheckbox = this;
            inputContainer.style.display = 'block';
          } else {
            this.checked = false;
            alert('Solo puede seleccionar una opción');
          }
        } else {
          selectedCheckbox = null;
          inputContainer.style.display = 'none';
        }
      });
    }

    // Validacion despliegue numero telefonico
    document.querySelector('input[name="phoneOption"]').addEventListener('change', function(event) {
        if (event.target.value === 'si') {
            document.getElementById('phoneField').style.display = 'block';
        } else {
            document.getElementById('phoneField').style.display = 'none';
        }
    });
}