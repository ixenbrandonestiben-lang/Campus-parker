let parqueados = JSON.parse(localStorage.getItem("parqueados")) || []
const seleccionarOpcion = document.getElementById("tipo")
const tabla = document.getElementById("tabla-servicios")


let tipos = ["moto", "carro", "camioneta", "bus"]

tipos.forEach(tipo => {

    let option = document.createElement("option")

    option.textContent = tipo

    seleccionarOpcion.appendChild(option)

})

function agregarVehiculo() {
    const placa = document.getElementById("placa").value
    const tipo = document.getElementById("tipo").value
    const fecha = document.getElementById("fecha").value
    const hora = document.getElementById("horaEntrada").value
    const slot = document.getElementById("slot").value

    if (!placa || !tipo === "seleccione tipo" || !fecha || !horaEntrada || !slot) {
        alert("Por favor, completa todos los campos.")
        return
    }

    const existeSlot = parqueados.some(vehiculo => vehiculo.slot === slot)
    if (existeSlot) {
        alert("El slot ya está ocupado. Por favor, elige otro.")
        return
    }

    let vehiculo = {
        placa,
        tipo,
        fecha,
        hora,
        slot
    }

    parqueados.push(vehiculo)

    localStorage.setItem("parqueados", JSON.stringify(parqueados))

    mostrarTabla();
    actualizarSlots();
}

function mostrarTabla() {

    tabla.innerHTML = ""
    parqueados.forEach((vehiculo, index) => {

        tabla.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${vehiculo.placa}</td>
                <td>${vehiculo.tipo}</td>
                <td>${vehiculo.fecha}</td>
                <td>${vehiculo.hora}</td>
                <td>${vehiculo.slot}</td>
            </tr>
        `;
    })
}

function actualizarSlots() {

    let espacios = document.querySelectorAll(".slots");

    espacios.forEach((espacio, index) => {

        let numeroSlot = index + 1;

        let ocupado = parqueados.find(vehiculo => vehiculo.slot == numeroSlot);

        let placaelemento = espacio.querySelector(".placa");
        let estadoelemento = espacio.querySelector(".slot-status");

        if (ocupado) {
            placaelemento.textContent = ocupado.placa;
            estadoelemento.textContent = "Ocupado";
            espacio.style.backgroundColor = "red";
        } else {
            placaelemento.textContent = "---";
            estadoelemento.textContent = "Disponible";
            espacio.style.backgroundColor = "green";
        }
    })
}


function retirarVehiculo() {
    const placa = prompt("Ingrese la placa del vehículo a retirar:");

    const index = parqueados.findIndex(vehiculo => vehiculo.placa === placa);

    if (index !== -1) {
        parqueados.splice(index, 1);
        localStorage.setItem("parqueados", JSON.stringify(parqueados));

        mostrarTabla();

        actualizarSlots();

    } else {
        alert("Vehículo no encontrado.");
    }
}

mostrarTabla();
actualizarSlots();

