export async function obtenerInformacionDePokemon(linkDePokemon) {
  return (await fetch(linkDePokemon)).json();
}

export function obtenerImagen(imagen) {
  return (fetch(imagen).then((respuesta) => respuesta.blob()));
}

export async function obtenerPaginaSiguiente(urlPaginaSiguiente) {
  return ((await fetch(urlPaginaSiguiente)).json());
}

export async function obtenerPaginaAnterior(urlPaginaAnterior) {
  return ((await fetch(urlPaginaAnterior)).json());
}

export function obtenerListaDePokemons(offset = 0, limite = 20) {
  return (fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limite}`)
    .then((resultado) => resultado.json()));
}
