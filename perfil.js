const fotoPerfil = document.getElementById('imagen');
const nombrePerfil = document.getElementById('nombre');
const emailPerfil = document.getElementById('email');
const telefonoPerfil = document.getElementById('telefono');
const salir = document.getElementById("logout")

salir.addEventListener("click", function () {
    confirm("¿Estás seguro de que deseas cerrar sesión?");
    window.location.href = "index.html";
})


let perfilUsuario = {
    fotoPerfil : "img/logo.jpg",
    nombrePerfil : "Estiben Ixen",
    emailPerfil : "ixenbrandonestiben@gmail.com",
    telefonoPerfil : "(502) 4647-8706"
}

localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));

function cargarPerfil() { 
    let perfilGuardado = JSON.parse(localStorage.getItem('perfilUsuario'));
    if (perfilGuardado) {
        fotoPerfil.src = perfilGuardado.fotoPerfil;
        nombrePerfil.textContent = perfilGuardado.nombrePerfil;
        emailPerfil.textContent = perfilGuardado.emailPerfil;
        telefonoPerfil.textContent = perfilGuardado.telefonoPerfil;
    }   
}

cargarPerfil();

function editarPerfil() {

    let nuevoNombre = prompt("Ingrese su nuevo nombre:");
    
    let nuevoEmail = prompt("Ingrese su nuevo email:");
    
    let nuevoTelefono = prompt("Ingrese su nuevo teléfono:");   

    if (nuevoNombre) {
        nombrePerfil.textContent = nuevoNombre;
        perfilUsuario.nombrePerfil = nuevoNombre;
    }
    if (nuevoEmail) {
        emailPerfil.textContent = nuevoEmail;
        perfilUsuario.emailPerfil = nuevoEmail;
    }
    if (nuevoTelefono) {
        telefonoPerfil.textContent = nuevoTelefono;
        perfilUsuario.telefonoPerfil = nuevoTelefono;
    }
    localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));
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
