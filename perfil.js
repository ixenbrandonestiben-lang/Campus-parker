const datosPerfil = JSON.parse(localStorage.getItem('perfilUsuario'))

document.getElementById("pf-nombre").textContent = datosPerfil.nombre;
document.getElementById("pf-correo").textContent = datosPerfil.correo0;
document.getElementById("pf-telefono").textContent = datosPerfil.telefono;

const perfil = document.getAnimations("ContenedorDialog")
show.show.perfil()


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



// function

// const nuevoNombre = prompt("Ingrese el su nuevo nombre...")
// const nuevoEmail = prompt("Ingrese su nuevo correo...")
// const nuevoTelefono = prompt("ingresa el nuevo numero de elefono...")


// let nombre = infoPerfil.nombre

// let correo = infoPerfil.correo

// let numero = infoPerfil.telefono

// localStorage.setItem("datos", JSON.stringify(infoPerfil))


// const tabla = document.getElementById("tr-body")

// tabla.innerHTML = `
//         <td>${infoPerfil.nombre = nuevoNombre} </td>
//         <td>${infoPerfil.correo = nuevoEmail} </td>
//         <td>${infoPerfil.telefono = nuevoTelefono} </td>
//         <td><button id="btn-editar" onclick="editarPerfil()">Editar perfil</button>
// </td>

//         `

// function mostrarTabla() {

//     tabla.innerHTML = ""
//     infoPerfil.forEach((nombre,correo,telefono) => {

//         tabla.innerHTML += `
//     <tr>
//     <td>${infoPerfil.nuevoNombre}</td>
//     <td>${infoPerfil.nuevoEmail}</td>
//     <td>${vehiculo.fecha}</td>
//     <td>${vehiculo.horaingresada}</td>
//     <td>${vehiculo.slot}</td>
//     </tr>
//     `;
//     })
// }


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
