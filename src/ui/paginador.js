import {
  mostrarTextoDeEspera,
} from './pokemones.js';

const $barraDeNavegacion = document.querySelector('#barra-de-navegacion');

function resaltarPaginaActiva(paginaActiva) {
  $barraDeNavegacion.querySelector('.active').classList.remove('active');
  document.querySelector(`#pagina-${paginaActiva}`).classList.add('active');
}

function manejarBarraDeNavegacion(e, paginaSeleccionada) {
  if (paginaSeleccionada < 5) {
    resaltarPaginaActiva(paginaSeleccionada);
    acomodarNumerosMinimosDeLasPaginas();
  } else {
    cambiarNumerosDeLasPaginas(Number(e.target.textContent));
  }
}

export default function manejarCambioDePagina(e) {
  let paginaSeleccionada;
  if ((e.target.id === 'siguiente-pagina') || (e.target.id === 'anterior-pagina')) {
    paginaSeleccionada = manejarCambioUnicoDePagina(e);
  } else {
    paginaSeleccionada = Number(e.target.textContent);
    mostrarTextoDeEspera();
    manejarBarraDeNavegacion(e, paginaSeleccionada);
  }
  if (paginaSeleccionada > 1) {
    habilitarBotonAnteriorPagina();
  } else if (paginaSeleccionada === 1) {
    deshabilitarBotonAnteriorPagina();
  }
  return paginaSeleccionada;
}

function cambiarNumerosDeLasPaginas(paginaSeleccionada) {
  resaltarPaginaActiva(4);
  $barraDeNavegacion.querySelector('#pagina-4').textContent = paginaSeleccionada;
  $barraDeNavegacion.querySelector('#pagina-1').textContent = paginaSeleccionada - 3;
  $barraDeNavegacion.querySelector('#pagina-2').textContent = paginaSeleccionada - 2;
  $barraDeNavegacion.querySelector('#pagina-3').textContent = paginaSeleccionada - 1;
  $barraDeNavegacion.querySelector('#pagina-5').textContent = paginaSeleccionada + 1;
  $barraDeNavegacion.querySelector('#pagina-6').textContent = paginaSeleccionada + 2;
  $barraDeNavegacion.querySelector('#pagina-7').textContent = paginaSeleccionada + 3;
}

function acomodarNumerosMinimosDeLasPaginas() {
  $barraDeNavegacion.querySelector('#pagina-1').textContent = 1;
  $barraDeNavegacion.querySelector('#pagina-2').textContent = 2;
  $barraDeNavegacion.querySelector('#pagina-3').textContent = 3;
  $barraDeNavegacion.querySelector('#pagina-4').textContent = 4;
  $barraDeNavegacion.querySelector('#pagina-5').textContent = 5;
  $barraDeNavegacion.querySelector('#pagina-6').textContent = 6;
  $barraDeNavegacion.querySelector('#pagina-7').textContent = 7;
}

function manejarCambioUnicoDePagina(e) {
  const paginaActual = Number($barraDeNavegacion.querySelector('.active').textContent);
  let paginaSeleccionada;
  if (e.target.id === 'siguiente-pagina') {
    paginaSeleccionada = paginaActual + 1;
    if (paginaSeleccionada < 5) {
      resaltarPaginaActiva(paginaSeleccionada);
      acomodarNumerosMinimosDeLasPaginas();
    } else {
      cambiarNumerosDeLasPaginas(paginaSeleccionada);
    }
  } else if (e.target.id === 'anterior-pagina') {
    paginaSeleccionada = paginaActual - 1;
    if (paginaSeleccionada < 5) {
      resaltarPaginaActiva(paginaSeleccionada);
      acomodarNumerosMinimosDeLasPaginas();
    } else {
      cambiarNumerosDeLasPaginas(paginaSeleccionada);
    }
  }
  return paginaSeleccionada;
}

function habilitarBotonAnteriorPagina() {
  if ($barraDeNavegacion.querySelector('.disabled')) {
    $barraDeNavegacion.querySelector('.disabled').classList.remove('disabled');
  }
}

function deshabilitarBotonAnteriorPagina() {
  $barraDeNavegacion.querySelector('#anterior-pagina').classList.add('disabled');
}
