document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  
    // Obtiene los valores de los campos del formulario
    var nombre = document.querySelector('input[name="nombre"]').value;
    var apellido = document.querySelector('input[name="apellido"]').value;
  
    // Crea un objeto con los datos del formulario
    var data = {
      nombre: nombre,
      apellido: apellido
    };
  
    // Realiza la solicitud POST al servidor
    fetch('/guardar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(function(response) {
      if (response.ok) {
        console.log('Datos guardados correctamente');
      } else {
        console.log('Error al guardar los datos');
      }
    })
    .catch(function(error) {
      console.log('Error de conexión:', error);
    });
  });
  