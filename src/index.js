import {
  deshabilitarBotonMostrarLista,
  mostrarBarraDeNavegacion,
} from './ui/utilities.js';

import {
  buscarListaDePokemones,
  buscarInformacionDePokemon,
} from './services/general.js';

import manejarCambioDePagina from './ui/paginador.js';

import {
  mostrarListaDePokemones,
  mostrarTextoDeEspera,
  mostrarCaracteristicas,
} from './ui/pokemones.js';

document.querySelector('#boton-ver-lista').onclick = obtenerPrimeraListaDePokemones;

async function obtenerPrimeraListaDePokemones() {
  mostrarTextoDeEspera();
  mostrarPokemones(await buscarListaDePokemones());
}

function mostrarPokemones(listaDePokemones) {
  deshabilitarBotonMostrarLista();
  mostrarBarraDeNavegacion();
  mostrarListaDePokemones(listaDePokemones.results, obtenerInformacionDePokemon);
}

async function obtenerInformacionDePokemon(e) {
  mostrarCaracteristicas(await buscarInformacionDePokemon(e));
}

document.querySelector('#barra-de-navegacion').onclick = cambiarDePagina;

async function cambiarDePagina(e) {
  const paginaSeleccionada = (Number(e.target.textContent));
  if (!isNaN(paginaSeleccionada) || (e.target.id === 'siguiente-pagina') || (e.target.id === 'anterior-pagina')) { // eslint-disable-line
    const listaDePokemones = await buscarListaDePokemones(manejarCambioDePagina(e));
    mostrarListaDePokemones(listaDePokemones.results, obtenerInformacionDePokemon);
  }
}
