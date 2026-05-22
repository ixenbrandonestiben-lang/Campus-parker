function cargarDatosPerfil() {

    const datosPerfil = JSON.parse(localStorage.getItem('datos')) || {};

    document.getElementById("pf-nombre").textContent = datosPerfil.nombre;
    document.getElementById("pf-correo").textContent = datosPerfil.correo;
    document.getElementById("pf-telefono").textContent = datosPerfil.contacto;
    document.getElementById("pf-contraseña").textContent = datosPerfil.contraseña;
    
}

cargarDatosPerfil()

function editarPerfil() {

    const datosPerfil = JSON.parse(localStorage.getItem('datos')) || {};
    
    let nuevoNombre = prompt("Ingrese su nuevo nombre:");
    let nuevoEmail = prompt("Ingrese su nuevo email:");
    let nuevacontraseña = prompt("ingrese su nueva contraseña...")
    let nuevoTelefono = prompt("Ingrese su nuevo teléfono:");

    document.getElementById("pf-nombre").textContent = nuevoNombre
    document.getElementById("pf-correo").textContent = nuevoEmail
    document.getElementById("pf-contraseña").textContent = nuevacontraseña
    document.getElementById("pf-telefono").textContent = nuevoTelefono

    const datosActualizados = {
        nombre: nuevoNombre || datosPerfil.nombre,
        correo: nuevoEmail || datosPerfil.correo,
        contraseña:nuevacontraseña || datosPerfil.contraseña,
        contacto: nuevoTelefono || datosPerfil.contacto
    }

    datosPerfil.push(datosActualizados);
    localStorage.setItem('datos', JSON.stringify(datosActualizados));

    cargarDatosPerfil();
    
alert("datos actualizados correctamente...")
}

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
