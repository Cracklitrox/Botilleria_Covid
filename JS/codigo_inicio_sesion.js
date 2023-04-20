// Espera para que todos los elementos de la página se carguen para continuar el script
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

// BORRAR
function gato_1() {
    return document.getElementById('imagen').src="https://media.tenor.com/2io-zi4Ok6IAAAAC/cat-gato.gif"
}
function gato_2() {
    return document.getElementById('imagen').src="https://i.pinimg.com/originals/72/77/19/72771935f70719c9d006e4c3f1a8320a.gif"
}
function rojo() {
    return document.getElementById('imagen').src="../led roja.jpg"
}
function verde() {
    return document.getElementById('imagen').src="../led verde.jpg"
}
// BORRAR

// Función para realizar la validación de inicio de sesión
function ready() {
    document.querySelector('form').addEventListener('submit', function(event) {
         // Prevenir el comportamiento predeterminado del formulario
        event.preventDefault();

        // Obtener los valores ingresados en los campos de usuario y contraseña
        const usernameOrEmail = document.getElementById('login_field').value;
        const password = document.getElementById('password').value;

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
    });
}