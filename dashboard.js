let parqueados = JSON.parse(localStorage.getItem("parqueados")) || []

const tabla = document.getElementById("tabla-vehiculos")

function mostrarTabla() {

    tabla.innerHTML = ""
    parqueados.forEach((vehiculo, index) => {

        tabla.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${vehiculo.placa}</td>
        <td>${vehiculo.tipo}</td>
        <td>${vehiculo.fecha}</td>
        <td>${vehiculo.horaingresada}</td>
        <td>${vehiculo.slot}</td>
        </tr>
    `;
    })
}

mostrarTabla()