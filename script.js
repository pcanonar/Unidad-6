// Variable para almacenar los doctores
let doctores = [];

// Función para validar el formulario utilizando expresiones regulares y el DOM
function validarFormulario() {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const especialidad = document.getElementById('especialidad').value;
  const consultorio = document.getElementById('consultorio').value;
  const correo = document.getElementById('correo').value;

  // Validación de campos utilizando expresiones regulares
  const nombreRegex = /^[A-Za-z\s]+$/;
  const cedulaRegex = /^\d+$/;
  const correoRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!nombreRegex.test(nombre)) {
    alert('Ingrese un nombre válido');
    return false;
  }

  if (!nombreRegex.test(apellido)) {
    alert('Ingrese un apellido válido');
    return false;
  }

  if (!cedulaRegex.test(cedula)) {
    alert('Ingrese un número de cédula válido');
    return false;
  }

  if (especialidad === '') {
    alert('Seleccione una especialidad');
    return false;
  }

  if (!correoRegex.test(correo)) {
    alert('Ingrese un correo válido');
    return false;
  }

  return true;
}

// Función para agregar un doctor al listado y generar el JSON
function agregarDoctor(event) {
  event.preventDefault();

  if (!validarFormulario()) {
    return;
  }

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const cedula = document.getElementById('cedula').value;
  const especialidad = document.getElementById('especialidad').value;
  const consultorio = document.getElementById('consultorio').value;
  const correo = document.getElementById('correo').value;

  const doctor = {
    nombre,
    apellido,
    cedula,
    especialidad,
    consultorio,
    correo
  };

  // Agregar doctor al listado
  doctores.push(doctor);

  // Actualizar la tabla
  const tableBody = document.querySelector('#doctorTable tbody');
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  const cell3 = newRow.insertCell();
  const cell4 = newRow.insertCell();
  const cell5 = newRow.insertCell();
  const cell6 = newRow.insertCell();

  cell1.textContent = doctor.nombre;
  cell2.textContent = doctor.apellido;
  cell3.textContent = doctor.cedula;
  cell4.textContent = doctor.especialidad;
  cell5.textContent = doctor.consultorio;
  cell6.textContent = doctor.correo;

  // Limpiar formulario
  document.getElementById('doctorForm').reset();
}

// Función para descargar el archivo JSON
function descargarJSON() {
  const jsonData = JSON.stringify(doctores);
  const jsonDataBlob = new Blob([jsonData], { type: 'application/json' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(jsonDataBlob);
  downloadLink.download = 'doctores.json';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Evento de envío de formulario
document.getElementById('doctorForm').addEventListener('submit', agregarDoctor);

// Evento de clic en el botón de descarga
document.getElementById('downloadButton').addEventListener('click', descargarJSON);