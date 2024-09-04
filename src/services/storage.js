export function retirarListaPokemones(paginaSeleccionada) {
  const listaPokemones = JSON.parse(localStorage.getItem(`lista_pokemones_pagina_${paginaSeleccionada}`));
  if (listaPokemones === null) {
    throw new Error('No se encontró la lista de pokemones seleccionada');
  }
  return listaPokemones;
}

export function guardarListaPokemones(listaDePokemones, numeroDePagina = 1) {
  localStorage.setItem(`lista_pokemones_pagina_${numeroDePagina}`, JSON.stringify(listaDePokemones));
}

export function retirarPokemon(idDePokemon) {
  const informacionDePokemon = JSON.parse(localStorage.getItem(idDePokemon));
  if (informacionDePokemon === null) {
    throw new Error('No se encontró el pokemon seleccionado');
  }
  return informacionDePokemon;
}

export function guardarPokemon(idDePokemon, urlDePokemon) {
  localStorage.setItem(idDePokemon, urlDePokemon);
}

export async function retirarImagenDePokemon(datosDePokemon) {
  const urlGuardadoEnLocalStorage = localStorage.getItem(`imagen_de_${datosDePokemon.name}`);
  if (urlGuardadoEnLocalStorage === null) {
    throw new Error('No se encontró la imagen del pokemon');
  }
  let imagenDePokemon;
  await fetch(urlGuardadoEnLocalStorage).then((response) => response.blob())
    .then((response) => {
      imagenDePokemon = response;
    });
  return imagenDePokemon;
}

export function guradarImagenDePokemon(imagenDePokemon, datosDePokemon) {
  const reader = new FileReader();
  reader.readAsDataURL(imagenDePokemon);
  reader.onloadend = () => {
    const urlImagenPokemonBase64 = reader.result;
    localStorage.setItem(`imagen_de_${datosDePokemon.name}`, urlImagenPokemonBase64);
  };
}
