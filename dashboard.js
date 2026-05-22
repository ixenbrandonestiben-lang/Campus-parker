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

menutoggle();