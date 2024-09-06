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
  let j = -3;
  for (let i = 1; i <= 7; i += 1) {
    $barraDeNavegacion.querySelector(`#pagina-${i}`).textContent = paginaSeleccionada + j;
    j += 1;
  }
}

function acomodarNumerosMinimosDeLasPaginas() {
  for (let i = 1; i <= 7; i += 1) {
    $barraDeNavegacion.querySelector(`#pagina-${i}`).textContent = i;
  }
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
