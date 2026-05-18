const infoPerfil = JSON.parse(localStorage.getItem("datos"))

function editarPerfil(){
    const nuevoNombre = prompt("Ingrese el su nuevo nombre...")
    const nuevoEmail = prompt("Ingrese su nuevo correo...")
    const nuevoTelefono = prompt("ingresa el nuevo numero de elefono...")

    nuevoNombre = infoPerfil.nombre;
    
    infoPerfil.correo = nuevoEmail;
    infoPerfil.contacto = nuevoTelefono;

}

editarPerfil()

localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));

const 
// function cargarPerfil() { 
//     let perfilGuardado = JSON.parse(localStorage.getItem('perfilUsuario'));
//     if (perfilGuardado) {
//         fotoPerfil.src = perfilGuardado.fotoPerfil;
//         nombrePerfil.textContent = perfilGuardado.nombrePerfil;
//         emailPerfil.textContent = perfilGuardado.emailPerfil;
//         telefonoPerfil.textContent = perfilGuardado.telefonoPerfil;
//     }   
// }

// cargarPerfil();

// function editarPerfil() {

//     let nuevoNombre = prompt("Ingrese su nuevo nombre:");
    
//     let nuevoEmail = prompt("Ingrese su nuevo email:");
    
//     let nuevoTelefono = prompt("Ingrese su nuevo teléfono:");   

//     if (nuevoNombre) {
//         .textContent = nuevoNombre;
//         perfilUsuario.n
//         // function cargarPerfil() { 
//         //     let perfilGuardado = JSON.parse(localStorage.getItem('perfilUsuario'));
//         //     if (perfilGuardado) {
//         //         fotoPerfil.src = perfilGuardado.fotoPerfil;
//         //         nombrePerfil.textContent = perfilGuardado.nombrePerfil;
//         //         emailPerfil.textContent = perfilGuardado.emailPerfil;
//         //         telefonoPerfil.textContent = perfilGuardado.telefonoPerfil;
//         //     }   
//         // }
        
//         // cargarPerfil();;
//     }
//     if (nuevoEmail) {
//         emailPerfil.textContent = nuevoEmail;
//         perfilUsuario.emailPerfil = nuevoEmail;
//     }
//     if (nuevoTelefono) {
//         telefonoPerfil.textContent = nuevoTelefono;
//         perfilUsuario.telefonoPerfil = nuevoTelefono;
//     }
//     localStorage.setItem('perfilUsuario', JSON.stringify(perfilUsuario));
// }



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
