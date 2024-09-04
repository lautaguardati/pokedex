import {
  obtenerListaDePokemons,
  obtenerInformacionDePokemon,
  obtenerImagen,
} from './api.js';

import {
  retirarListaPokemones as retirarListaPokemonesDeLocalStorage,
  guardarListaPokemones,
  retirarPokemon as retirarPokemonDeLocalStorage,
  guardarPokemon,
  retirarImagenDePokemon as retirarImagenDeLocalStorage,
  guradarImagenDePokemon,
} from './storage.js';

export async function buscarListaDePokemones(paginaSeleccionada = 1) {
  const MAXIMOS_POKEMONES_POR_PAGINA = 20;
  const offset = (paginaSeleccionada - 1) * MAXIMOS_POKEMONES_POR_PAGINA;

  try {
    return retirarListaPokemonesDeLocalStorage(paginaSeleccionada);
  } catch (error) {
    const listaDePokemones = await obtenerListaDePokemons(offset, MAXIMOS_POKEMONES_POR_PAGINA);
    try {
      guardarListaPokemones(listaDePokemones, paginaSeleccionada);
    } catch (excepcion) {
      return listaDePokemones;
    }
    return listaDePokemones;
  }
}

export async function buscarInformacionDePokemon(e) {
  try {
    return retirarPokemonDeLocalStorage(e.target.id);
  } catch (error) {
    const informacionDePokemon = await (obtenerInformacionDePokemon(e.target.dataset.url));
    try {
      guardarPokemon(e.target.id, JSON.stringify(informacionDePokemon));
    } catch (excepcion) {
      return informacionDePokemon;
    }
    return informacionDePokemon;
  }
}

export async function buscarImagenDePokemon(caracteristicas) {
  try {
    return await retirarImagenDeLocalStorage(caracteristicas);
  } catch (error) {
    const imagenDePokemon = await obtenerImagen(caracteristicas.sprites.front_default);
    try {
      guradarImagenDePokemon(imagenDePokemon, caracteristicas);
    } catch (excepcion) {
      return imagenDePokemon;
    }
    return imagenDePokemon;
  }
}
