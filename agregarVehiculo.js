let parqueados = JSON.parse(localStorage.getItem("parqueados")) || []
const seleccionarOpcion = document.getElementById("tipo")
const tabla = document.getElementById("tabla-servicios")
const salir = document.getElementById("logout")

function agregarVehiculo() {

    const placa = document.getElementById("placa").value;
    const tipo = document.getElementById("tipo").value;
    const fecha = document.getElementById("fecha").value;
    const slot = document.getElementById("slot").value;


    if (!placa || tipo === "Seleccione tipo" || !fecha || !slot) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    const VehiculoExistente = parqueados.some(vehiculo => vehiculo.placa === placa && vehiculo.tipo === tipo);
    const vehiculoNueva = parqueados.some(vehiculo => vehiculo.placa === placa && vehiculo.tipo !== tipo)
    if (VehiculoExistente) {

        alert("Revise bien la placa y el tipo de vehiculo, porque ya hay un vehiculo registrado con esta placa!!!")
        return;

    } else if (vehiculoNueva) {
        alert("guardado correctamente")
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
        horaingresada : horaActual, // Guarda la hora automática aquí
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

// 1. Buscar vehículo por placa
function buscarVehiculoPorPlaca(placa, tipo) {
    return parqueados.findIndex(vehiculo => vehiculo.placa === placa && vehiculo.tipo === tipo);
}


// 2. Calcular horas de parqueo
function calcularHoras(vehiculo) {
    const momentoSalida = new Date();
    const horaSalida = momentoSalida.toLocaleTimeString('es-GT', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    // Convertir hora ingresada a números
    const [hora, minutos] = convertirHoraAmPmANumeros(vehiculo.horaingresada);

    const momentoIngreso = new Date(vehiculo.fecha);
    momentoIngreso.setHours(hora, minutos, 0, 0);

    const diferenciaMs = momentoSalida - momentoIngreso;
    let horasCobrar = Math.ceil(diferenciaMs / (1000 * 60 * 60));
    if (horasCobrar <= 0) horasCobrar = 1;

    return { horasCobrar, horaSalida };
}

// 3. Calcular total a pagar
function calcularPago(horas) {
    const tarifa = 10;
    return horas * tarifa;
}
function mostrarTicket(vehiculo, horasCobrar, horaSalida, totalPagar){

    document.getElementById("tk-placa").textContent = vehiculo.placa
    document.getElementById("tk-tipo").textContent = vehiculo.tipo
    document.getElementById("tk-slot").textContent = vehiculo.slot
    document.getElementById("tk-ingreso").textContent = vehiculo.horaingresada
    document.getElementById("tk-salida").textContent = horaSalida
    document.getElementById("tk-tiempo").textContent = horasCobrar
    document.getElementById("tk-total").textContent = totalPagar

    const modal = document.getElementById("modal-ticket");
    modal.showModal();
}

function agregarTicketLocalstorege() {
    
    localStorage.setItem('facturas', JSON.stringify(mostrarTicket()));
}
function imprimirTicket(){
    // document.getElementById("modal-ticket").closest();
    alert("Enviando factura a impresion...");
    window.print();

    const modal = document.getElementById("modal-ticket")
    modal.closest();

}

function cerrarTicket() {
    
    alert("Ticket registrado en el sistema (Sin impresión).");
    
    // 2. Cierra el modal por completo
    const modal = document.getElementById('modal-ticket');
    modal.close();
  }

// // 4. Mostrar ticket
// function mostrarTicket(vehiculo, horasCobrar, horaSalida, totalPagar) {
//     confirm(
//         `====== CAMPUS PARKING ======
//     Placa: ${vehiculo.placa}
//     tipo: ${vehiculo.tipo}
//     Slot: ${vehiculo.slot}
//     -----------------------------------
//     Ingreso: ${vehiculo.horaingresada}
//     Salida: ${horaSalida} 
//     Tiempo Total: ${horasCobrar} hora(s)
//     ------------------------------------
//     Monto total: Q${totalPagar}
//     `
//     );
// }

// 5. Eliminar vehículo
function eliminarVehiculo(index) {
    parqueados.splice(index, 1);
    localStorage.setItem("parqueados", JSON.stringify(parqueados));
    mostrarTabla();
    actualizarSlots();
}

// Función principal que une todo
function retirarVehiculo() {
    const placa = prompt("Ingrese la placa del vehículo a retirar:");
    const tipo = prompt("Ingrese el tipo de vehiculo a retirar")
    const index = buscarVehiculoPorPlaca(placa, tipo);

    if (index !== -1) {
        const vehiculo = parqueados[index];
        const { horasCobrar, horaSalida } = calcularHoras(vehiculo);
        const totalPagar = calcularPago(horasCobrar);

        mostrarTicket(vehiculo, horasCobrar, horaSalida, totalPagar);
        eliminarVehiculo(index);
    } else {
        alert("Vehículo no encontrado.");
    }
}

// Conversión de hora AM/PM a números
function convertirHoraAmPmANumeros(horaStr) {
    const [tiempo, modificador] = horaStr.split(' ');
    let [horas, minutos] = tiempo.split(':');
    horas = parseInt(horas, 10);

    if (modificador === 'PM' && horas < 12) horas += 12;
    if (modificador === 'AM' && horas === 12) horas = 0;

    return [horas, parseInt(minutos, 10)];
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

