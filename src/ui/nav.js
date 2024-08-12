export function deshabilitarBotonMostrarLista() {
  document.querySelector('#boton-ver-lista').setAttribute('disabled', 'true');
}

export function mostrarBarraDeNavegacion() {
  document.querySelector('#barra-de-navegacion').removeAttribute('hidden');
}
