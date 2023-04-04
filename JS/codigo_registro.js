// Espera para que todos los elementos de la página se carguen para continuar el script
if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready();
}

// Función que almacena las validaciones del formulario
function ready() {
  // Variables para almacenar las distintas clases del formulario
  var formulario = document.querySelector('form');
  var nameInput = document.querySelector('#name');
  var emailInput = document.querySelector('#email');
  var passwordInput = document.querySelector('#password');
  var confirmPasswordInput = document.querySelector('#confirm-password');
  var errorNombre = document.createElement('p');
  var errorEmail = document.createElement('p');
  var errorPassword = document.createElement('p');
  var errorConfirmPassword = document.createElement('p');
  var form = document.querySelector('form');

  // Mensajes de error que se muestran cuando el usuario le falta algo
  errorNombre.textContent = 'Por favor ingrese su nombre';
  errorNombre.style.color = 'red';
  errorEmail.textContent = 'Por favor ingrese un correo electrónico válido';
  errorEmail.style.color = 'red';
  errorPassword.textContent = 'Por favor ingrese una contraseña';
  errorPassword.style.color = 'red';
  errorConfirmPassword.textContent = 'Las contraseñas no coinciden';
  errorConfirmPassword.style.color = 'red';

  // Evento para cuando el usuario oprime el boton de "Registrarse"
  form.addEventListener('submit', (event) => {
    // Detiene el envío del formulario
    event.preventDefault();
    
    // Obtiene los valores de los campos del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    // Verifica si los campos requeridos están vacíos
    if (!name || !email || !password || !confirmPassword) {
      alert('Formulario incompleto, ingrese todos los campos correctamente');
      return;
    }

    // Verifica si las contraseñas coinciden
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Verifica si el correo electrónico es válido
    if (!validateEmail(email)) {
      alert('Ingrese un correo electrónico válido');
      return;
    }

    // Si el formulario es válido, suelta una alerta y redirige al usuario a la página de inicio
    alert('Registrado correctamente');
    window.location.href = "../index.html";
  });

  // Muestra el mensaje de error con un color rojo para el nombre
  nameInput.addEventListener('input', () => {
    if (nameInput.validity.valid) {
      errorNombre.remove();
      nameInput.style.border = 'none';
    } else {
      formulario.appendChild(errorNombre);
      nameInput.style.border = '2px solid red';
    }
  });

  // Muestra el mensaje de error con un color rojo para el correo
  emailInput.addEventListener('input', () => {
    if (emailInput.validity.valid) {
      errorEmail.remove();
      emailInput.style.border = 'none';
    } else {
      formulario.appendChild(errorEmail);
      emailInput.style.border = '2px solid red';
    }
  });

  // Muestra el mensaje de error con un color rojo para la contraseña
  passwordInput.addEventListener('input', () => {
    if (passwordInput.validity.valid) {
      errorPassword.remove();
      passwordInput.style.border = 'none';
    } else {
      formulario.appendChild(errorPassword);
      passwordInput.style.border = '2px solid red';
    }
  });

  // Muestra el mensaje de error con un color rojo para la confirmacion de la contraseña
  confirmPasswordInput.addEventListener('input', () => {
    if (confirmPasswordInput.value === passwordInput.value) {
      errorConfirmPassword.remove();
      confirmPasswordInput.style.border = 'none';
    } else {
      formulario.appendChild(errorConfirmPassword);
      confirmPasswordInput.style.border = '2px solid red';
    }
  });

  // Muestra el mensaje de error con un color rojo para el formulario
  formulario.addEventListener('submit', (e) => {
    if (!nameInput.validity.valid) {
      e.preventDefault();
      formulario.appendChild(errorNombre);
      nameInput.style.border = '2px solid red';
    }

    if (!emailInput.validity.valid) {
      e.preventDefault();
      formulario.appendChild(errorEmail);
      emailInput.style.border = '2px solid red';
    }

    if (!passwordInput.validity.valid) {
      e.preventDefault();
      formulario.appendChild(errorPassword);
      passwordInput.style.border = '2px solid red';
    }

    if (confirmPasswordInput.value !== passwordInput.value) {
      e.preventDefault();
      formulario.appendChild(errorConfirmPassword);
      confirmPasswordInput.style.border = '2px solid red';
    }
  });
}

// Función para validar el formato de un correo electrónico
function validateEmail(email) {
  var emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}