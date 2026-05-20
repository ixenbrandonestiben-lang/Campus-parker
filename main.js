let datoscliente =
{
    "nombre": "admin",
    "correo": "admin123@gmail.com",
    "contraseña": "admin123...",
    "contacto": "4647-8945"
}
localStorage.setItem("datos", JSON.stringify(datoscliente))

function inicioSesion(correIngresado, contraseñaIngresada) {
    const datosSecion = JSON.parse(localStorage.getItem("datos"));

    const nombre = datosSecion.nombre;

    const correo = datosSecion.correo;

    const contraseña = datosSecion.contraseña;

    if (correIngresado == correo && contraseñaIngresada == contraseña) {

        alert("Bienvenido ", nombre)
        window.location.href = "dashboard.html"
    
    } else {
    
        alert("Error al ingresear el correo: ", correo, " o esta mal su contraseña: ", contraseña)

    }
}

const btninicio = document.getElementById("btn-inicio")

btninicio.addEventListener("click", function(){

    btninicio.textContent = "cargando...";

    const correoIngresado = document.getElementById("email").value

    const contraseñaIngresada = document.getElementById("password").value


    setTimeout(() => {
        inicioSesion(correoIngresado, contraseñaIngresada);
    }, 2000)
})


