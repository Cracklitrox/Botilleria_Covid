function mostrarNombre(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var nombre = document.getElementById("login_field").value;
  document.getElementById("nombreDiv").textContent = nombre;

  // Almacenar el nombre en el almacenamiento local del navegador
  localStorage.setItem("nombreUsuario", nombre);

  mostrarImagen();
}
//La funcion mostrarNombre se ejecutara cuando se envie el formulario 
var formLogin = document.getElementById("form-login");
if (formLogin) {
  formLogin.addEventListener("submit", mostrarNombre);
}

// Recuperar el nombre del almacenamiento local y mostrarlo en el div al cargar la página
window.addEventListener("load", function() {
  var nombreAlmacenado = localStorage.getItem("nombreUsuario");
  if (nombreAlmacenado) {
    document.getElementById("nombreDiv").textContent = nombreAlmacenado;
    mostrarImagen();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Obtener la URL de la imagen asignada previamente, si existe
  var imagenURL = localStorage.getItem("imagenUsuarioURL");

  // Si existe una URL de imagen guardada, asignarla a la imagen del usuario
  if (imagenURL) {
    const imagenUsuario = document.getElementById('imagenUsuario');
    imagenUsuario.src = imagenURL;
    mostrarImagen();
  } else {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const imagenURL = data.results[0].picture.thumbnail;
        const imagenUsuario = document.getElementById('imagenUsuario');
        imagenUsuario.src = imagenURL;
        mostrarImagen();

        // Guardar la URL de la imagen asignada en el almacenamiento local del navegador
        localStorage.setItem("imagenUsuarioURL", imagenURL);
      })
      .catch(error => {
        console.log('Error al obtener la imagen del usuario:', error);
      });
  }
});

function mostrarImagen() {
  const nombreDiv = document.getElementById("nombreDiv"); // Obtiene el dato del nombre del usuario
  const imagenUsuario = document.getElementById('imagenUsuario'); // Obtiene el elemento de la imagen del usuario

  if (nombreDiv.textContent && nombreDiv.textContent !== "sin usuario") {
    // Si hay contenido en el elemento de nombre y no es "sin usuario"
    imagenUsuario.style.visibility = 'visible'; // Mostrar la imagen del usuario estableciendo la visibilidad como visible
  } else {
    imagenUsuario.style.visibility = 'hidden'; // Ocultar la imagen del usuario estableciendo la visibilidad como oculta
  }
}

function cerrarSesion() {
  // Eliminar el nombre del almacenamiento local
  localStorage.removeItem("nombreUsuario");

  // Cambiar el contenido del elemento "nombreDiv"
  document.getElementById("nombreDiv").textContent = "sin usuario";

  // Eliminar la imagen del usuario
  const imagenUsuario = document.getElementById('imagenUsuario');
  imagenUsuario.src = '';
  imagenUsuario.alt = '';

  // Restablecer el evento onclick del enlace de cerrar sesión
  const dropdownItem = document.querySelector('.dropdown-item');
  dropdownItem.onclick = cerrarSesion;

  // Eliminar la URL de la imagen asignada del almacenamiento local
  localStorage.removeItem("imagenUsuarioURL");
}