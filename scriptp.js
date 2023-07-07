// Variable para almacenar los pacientes
let pacientes = [];
// Función para validar el formulario utilizando expresiones regulares y el DOM
function validarFormulario() {

    const nombrepaciente = document.getElementById('nombrepaciente').value;
    const apellidopaciente = document.getElementById('apellidopaciente').value;
    const cedulapaciente = document.getElementById('cedulapaciente').value;
    const edadpaciente = document.getElementById('edadpaciente').value;
    const telefonopaciente = document.getElementById('telefonopaciente').value;
    const especialidadpaciente = document.getElementById('especialidadpaciente').value;
  
  // Validación de campos utilizando expresiones regulares
  const nombreRegex = /^[A-Za-z\s]+$/;
  const numeroRegex= /^\d+$/;

  if (!nombreRegex.test(nombrepaciente)) {
    alert('Ingrese un nombre válido');
    return false;
  }

  if (!nombreRegex.test(apellidopaciente)) {
    alert('Ingrese un apellido válido');
    return false;
  }

  if (!numeroRegex.test(cedulapaciente)) {
    alert('Ingrese un número de cédula válido');
    return false;
  }
  if (!numeroRegex.test(edadpaciente)) {
    alert('Ingrese un número de edad válido');
    return false;
  }

  if (!numeroRegex.test(telefonopaciente)) {
    alert('Ingrese un número de edad válido');
    return false;
  }
  if (especialidadpaciente === '') {
    alert('Seleccione una especialidad');
    return false;
  }


  return true;
}

// Función para agregar un paciente al listado y generar el JSON
function agregarPaciente(event) {
  event.preventDefault();

  if (!validarFormulario()) {
    return;
  }

    const nombrepaciente = document.getElementById('nombrepaciente').value;
    const apellidopaciente = document.getElementById('apellidopaciente').value;
    const cedulapaciente = document.getElementById('cedulapaciente').value;
    const edadpaciente = document.getElementById('edadpaciente').value;
    const telefonopaciente = document.getElementById('telefonopaciente').value;
    const especialidadpaciente = document.getElementById('especialidadpaciente').value;
  

  const paciente = {
    nombrepaciente,
    apellidopaciente,
    cedulapaciente,
    edadpaciente,
    telefonopaciente,
    especialidadpaciente
    };

  // Agregar paciente al listado
  pacientes.push(paciente);

  // Actualizar la tabla
  const tableBody = document.querySelector('#pacienteTable tbody');
  const newRow = tableBody.insertRow(tableBody.rows.length); // Especificar el índice de la fila

  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  const cell3 = newRow.insertCell();
  const cell4 = newRow.insertCell();
  const cell5 = newRow.insertCell();
  const cell6 = newRow.insertCell();

  cell1.textContent = paciente.nombrepaciente;
  cell2.textContent = paciente.apellidopaciente;
  cell3.textContent = paciente.cedulapaciente;
  cell4.textContent = paciente.edadpaciente;
  cell5.textContent = paciente.telefonopaciente;
  cell6.textContent = paciente.especialidadpaciente;

  
  // Limpiar formulario
  document.getElementById('pacienteForm').reset();
}

// Función para descargar el archivo JSON
function descargarJSON() {
  const jsonData = JSON.stringify(pacientes);
  const jsonDataBlob = new Blob([jsonData], { type: 'application/json' });
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(jsonDataBlob);
  downloadLink.download = 'pacientes.json';
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Evento de envío de formulario
document.getElementById('pacienteForm').addEventListener('submit', agregarPaciente);

// Evento de clic en el botón de descarga
document.getElementById('downloadButtonp').addEventListener('click', descargarJSON);


