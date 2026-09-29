const titulo = document.getElementById('titulo-principal');
const boton = document.getElementById('btn-accion');
const parrafo = document.querySelector('.texto-descripcion');
const mensajeAlerta = document.querySelector('#mensaje-alerta');

boton.addEventListener('click', () => {
  parrafo.textContent = '¡El texto y el color del elemento han sido modificados correctamente!';
  parrafo.style.color = '#28a745';
  parrafo.style.fontWeight = 'bold';
  
  titulo.style.color = '#007bff';

  mensajeAlerta.style.display = 'block';

  alert('¡Evento ejecutado correctamente!');
});