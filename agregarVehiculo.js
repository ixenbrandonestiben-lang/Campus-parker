let parqueados = []

// const placaIngresada = document.getElementById("placa")

const seleccionarOpcion = document.getElementById("tipo")

const opt = document.createElement("option")
opt.textContent = "Moto"
seleccionarOpcion.appendChild(opt)

opt.textContent = "Carro"
seleccionarOpcion.appendChild(opt)

opt.textContent = "Bus"
seleccionarOpcion.appendChild(opt)
