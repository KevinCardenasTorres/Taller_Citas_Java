var citas = [];

function mostrarDoctor() {
  var especialidad = document.getElementById('especialidad').value;
  var doctorContainer = document.getElementById('doctorContainer');
  var doctorInput = document.getElementById('doctor');
  var consultorioInput = document.getElementById('consultorio');
  var doctorCorreoInput = document.getElementById('doctor_correo');

  if (especialidad !== '') {
    doctorContainer.style.display = 'block';

    // Obtener los datos del doctor según la especialidad seleccionada
    var doctor, consultorio, doctorCorreo;
    switch (especialidad) {
      case 'medicina_general':
        doctor = 'Maria Cadona';
        consultorio = '13';
        doctorCorreo = 'Maria2001@gmail.com';
        break;
      case 'cardiologia':
        doctor = 'Raul Camacho';
        consultorio = '11';
        doctorCorreo = 'Raul_camacho@gmail.com';
        break;
      case 'medicina_interna':
        doctor = 'Ricardo Martinez';
        consultorio = '15';
        doctorCorreo = 'Rich_doc2001@gmail.com';
        break;
      case 'dermatologia':
        doctor = 'Angela Lasso';
        consultorio = '20';
        doctorCorreo = 'Angelical98@gmail.com';
        break;
      case 'rehabilitacion_fisica':
        doctor = 'Gabriela Opsina';
        consultorio = '23';
        doctorCorreo = 'Gabi_07osp@gmail.com';
        break;
      case 'psicologia':
        doctor = 'Lina Vasquez';
        consultorio = '18';
        doctorCorreo = 'Linavas_2007@gmail.com';
        break;
      case 'odontologia':
        doctor = 'Nelson Lopez';
        consultorio = '18';
        doctorCorreo = 'Nelsonlopez123@gmail.com';
        break;
      case 'radiologia':
        doctor = 'Vanessa Rodas';
        consultorio = '17';
        doctorCorreo = 'Vanessadoc@gmail.com';
        break;
    }

    doctorInput.value = doctor;
    consultorioInput.value = consultorio;
    doctorCorreoInput.value = doctorCorreo;
  } else {
    doctorContainer.style.display = 'none';
    doctorInput.value = '';
    consultorioInput.value = '';
    doctorCorreoInput.value = '';
  }
}

function confirmarCita() {
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var cedula = document.getElementById('cedula').value;
  var edad = document.getElementById('edad').value;
  var correo = document.getElementById('correo').value;
  var especialidad = document.getElementById('especialidad').value;
  var doctor = document.getElementById('doctor').value;
  var consultorio = document.getElementById('consultorio').value;
  var fecha = document.getElementById('fecha').value;
  var hora = document.getElementById('hora').value;

  document.getElementById('confirmNombre').textContent = nombre;
  document.getElementById('confirmApellido').textContent = apellido;
  document.getElementById('confirmCedula').textContent = cedula;
  document.getElementById('confirmEdad').textContent = edad;
  document.getElementById('confirmCorreo').textContent = correo;
  document.getElementById('confirmEspecialidad').textContent = especialidad;
  document.getElementById('confirmDoctor').textContent = doctor;
  document.getElementById('confirmConsultorio').textContent = consultorio;
  document.getElementById('confirmFecha').textContent = fecha;
  document.getElementById('confirmHora').textContent = hora;

  document.getElementById('nombre').value = '';
  document.getElementById('apellido').value = '';
  document.getElementById('cedula').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('especialidad').value = '';
  document.getElementById('doctor').value = '';
  document.getElementById('consultorio').value = '';
  document.getElementById('doctor_correo').value = '';
  document.getElementById('fecha').value = '';
  document.getElementById('hora').value = '';

  document.getElementById('confirmModal').style.display = 'block';
}

function confirmarCitaExito() {
  var nombre = document.getElementById('confirmNombre').textContent;
  var apellido = document.getElementById('confirmApellido').textContent;
  var cedula = document.getElementById('confirmCedula').textContent;
  var edad = document.getElementById('confirmEdad').textContent;
  var correo = document.getElementById('confirmCorreo').textContent;
  var especialidad = document.getElementById('confirmEspecialidad').textContent;
  var doctor = document.getElementById('confirmDoctor').textContent;
  var consultorio = document.getElementById('confirmConsultorio').textContent;
  var fecha = document.getElementById('confirmFecha').textContent;
  var hora = document.getElementById('confirmHora').textContent;

  citas.push({
    nombre: nombre,
    apellido: apellido,
    cedula: cedula,
    edad: edad,
    correo: correo,
    especialidad: especialidad,
    doctor: doctor,
    consultorio: consultorio,
    fecha: fecha,
    hora: hora
  });

  document.getElementById('successModal').style.display = 'block';
}

function cerrarModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

function mostrarCitas() {
  var appointmentList = document.getElementById('appointmentList');
  appointmentList.innerHTML = '';

  if (citas.length === 0) {
    appointmentList.innerHTML = '<p>No hay citas agendadas</p>';
  } else {
    var listHTML = '<h3>Citas Agendadas:</h3>';
    for (var i = 0; i < citas.length; i++) {
      listHTML +=
        '<p><strong>Nombre:</strong> ' +
        citas[i].nombre +
        '</p>' +
        '<p><strong>Apellido:</strong> ' +
        citas[i].apellido +
        '</p>' +
        '<p><strong>Cédula:</strong> ' +
        citas[i].cedula +
        '</p>' +
        '<p><strong>Edad:</strong> ' +
        citas[i].edad +
        '</p>' +
        '<p><strong>Correo Electrónico:</strong> ' +
        citas[i].correo +
        '</p>' +
        '<p><strong>Especialidad:</strong> ' +
        citas[i].especialidad +
        '</p>' +
        '<p><strong>Doctor:</strong> ' +
        citas[i].doctor +
        '</p>' +
        '<p><strong>Consultorio:</strong> ' +
        citas[i].consultorio +
        '</p>' +
        '<p><strong>Fecha:</strong> ' +
        citas[i].fecha +
        '</p>' +
        '<p><strong>Hora:</strong> ' +
        citas[i].hora +
        '</p>' +
        '<hr>';
    }
    appointmentList.innerHTML = listHTML;
  }

  document.getElementById('appointmentListModal').style.display = 'block';
}

function mostrarCitasAgendadas() {
  var appointmentList = document.getElementById('appointmentList');
  appointmentList.innerHTML = '';

  if (citas.length === 0) {
    appointmentList.innerHTML = '<p>No hay citas agendadas</p>';
  } else {
    var listHTML = '<h3>Citas Agendadas:</h3>';
    for (var i = 0; i < citas.length; i++) {
      listHTML +=
        '<p><strong>Nombre:</strong> ' +
        citas[i].nombre +
        '</p>' +
        '<p><strong>Apellido:</strong> ' +
        citas[i].apellido +
        '</p>' +
        '<p><strong>Cédula:</strong> ' +
        citas[i].cedula +
        '</p>' +
        '<p><strong>Edad:</strong> ' +
        citas[i].edad +
        '</p>' +
        '<p><strong>Correo Electrónico:</strong> ' +
        citas[i].correo +
        '</p>' +
        '<p><strong>Especialidad:</strong> ' +
        citas[i].especialidad +
        '</p>' +
        '<p><strong>Doctor:</strong> ' +
        citas[i].doctor +
        '</p>' +
        '<p><strong>Consultorio:</strong> ' +
        citas[i].consultorio +
        '</p>' +
        '<p><strong>Fecha:</strong> ' +
        citas[i].fecha +
        '</p>' +
        '<p><strong>Hora:</strong> ' +
        citas[i].hora +
        '</p>' +
        '<hr>';
    }

    appointmentList.innerHTML = listHTML;
  }

  document.getElementById('appointmentListModal').style.display = 'block';
}
/**/
