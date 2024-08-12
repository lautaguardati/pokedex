import {
  obtenerListaDePokemons,
  obtenerPaginaSiguiente,
  obtenerPaginaAnterior,
} from './api/apiCalls.js';

import mostrarListaDePokemones from './ui/pokemones.js';

import {
  deshabilitarBotonMostrarLista,
  mostrarBarraDeNavegacion,
} from './ui/nav.js';

document.querySelector('#boton-ver-lista').onclick = obtenerPrimeraListaDePokemones;
let listaActual;

async function obtenerPrimeraListaDePokemones() {
  listaActual = await obtenerListaDePokemons();
  mostrarPokemones(listaActual);
}

function mostrarPokemones(listaDePokemones) {
  deshabilitarBotonMostrarLista();
  mostrarBarraDeNavegacion();
  mostrarListaDePokemones(listaDePokemones.results);
}

document.querySelector('#pagina-siguiente').onclick = pasarAPaginaSiguiente;
document.querySelector('#pagina-anterior').onclick = pasarAPaginaAnterior;

async function pasarAPaginaSiguiente() {
  listaActual = await obtenerPaginaSiguiente(listaActual.next);
  mostrarListaDePokemones(listaActual.results);
}

async function pasarAPaginaAnterior() {
  listaActual = await obtenerPaginaAnterior(listaActual.previous);
  mostrarListaDePokemones(listaActual.results);
}
