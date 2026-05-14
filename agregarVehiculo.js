let parqueados = JSON.parse(localStorage.getItem("parqueados")) || []
const seleccionarOpcion = document.getElementById("tipo")
const tabla = document.getElementById("tabla-servicios")
const btnhora = document.getElementById("imprimirh")

let tipos = ["moto", "carro", "camioneta", "bus"]

tipos.forEach(tipo => {

    let option = document.createElement("option")

    option.textContent = tipo

    seleccionarOpcion.appendChild(option)

})

function agregarVehiculo() {

    const placa = document.getElementById("placa").value;
    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value;
    const slot = document.getElementById("slot").value;


    if (!placa || tipo === "Seleccione tipo" || !fecha || !slot) {
        alert("Por favor, completa todos los campos.");
        return;
    }


    const existeSlot = parqueados.some(vehiculo => vehiculo.slot === slot);
    if (existeSlot) {
        alert("El slot ya está ocupado. Por favor, elige otro.");
        return;
    }


    const horaActual = new Date().toLocaleTimeString('es-GT', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });


    let vehiculo = {
        placa,
        tipo,
        fecha,
        horaingresada: horaActual, // Guarda la hora automática aquí
        slot
    };

    parqueados.push(vehiculo);
    localStorage.setItem("parqueados", JSON.stringify(parqueados));

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
                <td>${vehiculo.horaingresada}</td>
                <td>${vehiculo.slot}</td>
            </tr>
        `;
    })
}

function retirarVehiculo() {
    const placa = prompt("Ingrese la placa del vehículo a retirar:");

    const index = parqueados.findIndex(vehiculo => vehiculo.placa === placa);

    if (index !== -1) {
        const momentoSalida = new Date();
        const horaSalida = momentoSalida.toLocaleTimeString('es-GT', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true

        });
        
        const [hora, minutos] = convertirHoraAmPmANumeros(vehiculo.horaingresada)
        const momentoingreso = new Date(vehiculo.fecha);
        momentoingreso.setHours(hora, minutos, 0,0);

        const deferenciaMiliSegundos = horaingresada - horaSalida;
        let horasCobrar = Math.ceil(deferenciaMiliSegundos / (1000*60*60)) 

        if(horasCobrar <= 0) horasCobrar = 1;
        const tarifa = 10
        const totalPagar = horasCobrar*tarifa

        alert(
            `======cAMPUS===PARKING======
            Placa: ${vehiculo.placa}
            slot: ${vehiculo.slot}
            -----------------------------------
            Ingreso: ${vehiculo.horaingresada}
            salida: ${horaSalida} 
            Tiempo Total: ${horasCobrar} hora(s)
            ------------------------------------
            Monto total:${totalPagar}
            `
        )
        parqueados.splice(index, 1);

        localStorage.setItem("parqueados", JSON.stringify(parqueados));

        mostrarTabla();

        actualizarSlots();

    } else {
        alert("Vehículo no encontrado.");
    }
}

mostrarTabla();

function convertirHoraAmPmANumeros(){
    const [tiempo, modificador] = horaStr.split('')
    let [horas, minutos] = tiempo.split(':')
    horas = parseInt(horas, 10);

    if (modificador === 'PM' && horas < 12) horas += 12;
    if (modificador === 'AM' && horas === 12) horas = 0;
    return [horas, parseInt(minutos, 10)]
}