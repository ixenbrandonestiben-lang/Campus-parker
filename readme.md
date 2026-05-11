# 🚗 Campus Parking

Sistema web administrativo para la gestión de parqueaderos.

Campus Parking es una aplicación desarrollada con HTML, CSS y JavaScript que permite administrar vehículos, controlar espacios de parqueo, calcular costos automáticamente y mejorar la organización de los servicios dentro de un parqueadero.

---

# 📌 Descripción del proyecto

Actualmente muchos parqueaderos llevan el control de ingresos y cobros de manera manual, lo cual puede provocar:

* errores en cálculos
* pérdida de información
* desorganización
* inconformidades de clientes

Campus Parking busca solucionar estos problemas mediante una plataforma moderna, responsive y fácil de utilizar.

---

# 🎯 Objetivos

✅ Registrar vehículos de manera eficiente.

✅ Administrar tipos de vehículos y tarifas.

✅ Controlar slots disponibles y ocupados.

✅ Calcular automáticamente el costo del parqueo.

✅ Mejorar la experiencia del usuario mediante una interfaz moderna.

✅ Implementar persistencia de datos con localStorage.

---

# 🛠️ Tecnologías utilizadas

| Tecnología     | Uso                          |
| -------------- | ---------------------------- |
| HTML5          | Estructura de la aplicación  |
| CSS3           | Diseño y estilos             |
| JavaScript     | Lógica y funcionalidad       |
| localStorage   | Persistencia de datos        |
| Web Components | Reutilización de componentes |
| CSS Grid       | Layout principal             |
| Flexbox        | Alineación y responsive      |

---

# 🔐 Módulo Login

La aplicación cuenta con un sistema de autenticación para restringir el acceso únicamente a usuarios autorizados.

## Usuario inicial

```txt
Nombre: admin
Email: admin@campusparking.com
Contraseña: Admin123
```

## Funcionalidades

* validación de email y contraseña
* autenticación de usuario
* control de acceso
* almacenamiento de sesión

---

# 🚘 Gestión de tipos de vehículos

Este módulo permite administrar los tipos de vehículos admitidos dentro del parqueadero.

## Funcionalidades CRUD

* Crear tipos de vehículos
* Mostrar registros
* Actualizar información
* Eliminar registros

## Datos gestionados

| Campo  | Descripción         |
| ------ | ------------------- |
| Código | Identificador único |
| Nombre | Tipo de vehículo    |
| Tarifa | Costo por hora      |

## Ejemplos

* Moto
* Automóvil
* Camioneta
* Pickup
* Bus

---

# 🅿️ Gestión de servicios de parqueadero

Este módulo controla el ingreso y salida de vehículos dentro del parqueadero.

## Datos registrados

| Campo            | Descripción                  |
| ---------------- | ---------------------------- |
| Placa            | Identificación del vehículo  |
| Tipo de vehículo | Relación con módulo de tipos |
| Fecha            | Fecha de ingreso             |
| Hora de entrada  | Hora inicial                 |
| Hora de salida   | Hora final                   |
| Slot             | Espacio asignado             |
| Total            | Costo generado               |

---

# ✅ Validaciones implementadas

## Placa única

No se permite registrar vehículos con placas repetidas.

## Slot único

No se permite asignar un slot ocupado.

## Formato de placa

Formato válido:

```txt
ABC123
```

## Validación de horarios

La hora de salida debe ser posterior a la hora de entrada.

## Disponibilidad de slots

El sistema verifica automáticamente si un espacio está disponible.

---

# 💵 Cálculo automático de costo

El sistema calcula automáticamente el costo del parqueo basándose en:

```txt
Tiempo de permanencia × tarifa del tipo de vehículo
```

## Ejemplo

```txt
Entrada: 08:00 AM
Salida: 12:00 PM
Tiempo: 4 horas
Tarifa automóvil: Q10

Total: Q40
```

---

# 👤 Perfil de usuario

La aplicación incluye un modal de perfil que permite modificar:

* nombre
* email
* contraseña

---

# 🎨 Diseño UI/UX

La interfaz fue diseñada con enfoque moderno y responsive.

## Características visuales

* diseño oscuro moderno
* glassmorphism
* sidebar interactivo
* dashboard administrativo
* cards estadísticas
* responsive design
* efectos hover
* estructura adaptable a móviles

---

# 📱 Responsive Design

La aplicación fue desarrollada bajo enfoque mobile first.

Compatible con:

* teléfonos móviles
* tablets
* laptops
* monitores de escritorio

---

# 🧩 Web Components

Se utilizan componentes reutilizables para mejorar:

* organización del código
* reutilización
* mantenimiento
* escalabilidad

## Componentes propuestos

* navbar
* sidebar
* modal
* card
* slot-card
* botones reutilizables

---

# 💾 Persistencia de datos

La aplicación utiliza localStorage para almacenar información localmente.

## Datos almacenados

* usuarios
* tipos de vehículos
* servicios
* sesión activa

---

# 📂 Estructura del proyecto

```txt
campus-parking/
│
├── index.html
│
├── css/
│   ├── style.css
│   ├── login.css
│   ├── dashboard.css
│   ├── servicios.css
│   ├── perfil.css
│
├── js/
│   ├── app.js
│   ├── login.js
│   ├── servicios.js
│   ├── vehiculos.js
│   ├── storage.js
│
├── components/
│   ├── sidebar.js
│   ├── navbar.js
│   ├── modal.js
│   ├── cards.js
│
├── img/
│
└── pages/
    ├── dashboard.html
    ├── vehiculos.html
    ├── servicios.html
    └── perfil.html
```

---

# 🚀 Funcionalidades principales

✅ Login de usuarios.

✅ Dashboard administrativo.

✅ Gestión de vehículos.

✅ Gestión de slots.

✅ Cálculo automático de tarifas.

✅ CRUD completo.

✅ Validaciones.

✅ Persistencia local.

✅ Diseño responsive.

---

# 🔥 Posibles mejoras futuras

* Base de datos real
* API REST
* Roles de usuario
* Reportes PDF
* Dashboard con gráficas
* Notificaciones
* Reservas de slots
* Sistema de pagos
* Modo claro/oscuro

---

# 👨‍💻 Autor

Proyecto desarrollado como solución administrativa para gestión de parqueaderos.

---

# 📄 Licencia

Este proyecto fue desarrollado con fines educativos y académicos.
