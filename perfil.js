function cargarDoatosPerfil() {

    const datosPerfil = JSON.parse(localStorage.getItem('datos'))

    document.getElementById("pf-nombre").textContent = datosPerfil.nombre;
    document.getElementById("pf-correo").textContent = datosPerfil.correo;
    document.getElementById("pf-telefono").textContent = datosPerfil.contacto;

}

cargarDoatosPerfil()

function editarPerfil() {

    let nuevoNombre = prompt("Ingrese su nuevo nombre:", getElementById ("pf-nombre").textContent);
    let nuevoEmail = prompt("Ingrese su nuevo email:",getElementById ("pf-correo").textContent);
    let nuevoTelefono = prompt("Ingrese su nuevo teléfono:", getElementById("pf-telefono").textContent);

    if (nuevoNombre !== null && nuevoEmail !== null && nuevoTelefono !== null)

    document.getElementById("pf-nombre").textContent = nuevoNombre
    document.getElementById("pf-correo").textContent = nuevoEmail
    document.getElementById("pf-telefono").textContent = nuevoTelefono

    const datosActualizados = {
        nombre: nuevoNombre,
        correo: nuevoEmail,
        contacto: nuevoTelefono
    }

   
}

localStorage.setItem('datos', JSON.stringify(datosActualizados));

alert("datos actualizados correctamente...")

editarPerfil()


function menutoggle() {
    const toggleBtn = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('#sidebar nav a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
}
