const reservar = document.querySelector('#reservar');
const cancelar = document.querySelector('#cancelar');
const estado = document.querySelector('#estado');
function actualizarReserva(activa) {
  reservar.disabled = activa;
  reservar.textContent = activa ? 'Lugar reservado' : 'Reservar un lugar';
  cancelar.hidden = !activa;
  estado.textContent = activa ? 'Reserva confirmada para Interfaces web accesibles. Jueves, 14:00, laboratorio 2.' : 'Reserva cancelada. Puedes volver a reservar.';
  (activa ? cancelar : reservar).focus();
}
reservar.addEventListener('click', () => actualizarReserva(true));
cancelar.addEventListener('click', () => actualizarReserva(false));
