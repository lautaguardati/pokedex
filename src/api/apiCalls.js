export async function obtenerListaDePokemons() {
  return (fetch('https://pokeapi.co/api/v2/pokemon/').then((resultado) => resultado.json()));
}

export async function obtenerInformacionDePokemon(linkDePokemon) {
  return (await fetch(linkDePokemon)).json();
}

export async function obtenerImagen(imagen) {
  return (fetch(imagen).then((respuesta) => respuesta.blob()));
}

export async function obtenerPaginaSiguiente(urlPaginaSiguiente) {
  return ((await fetch(urlPaginaSiguiente)).json());
}

export async function obtenerPaginaAnterior(urlPaginaAnterior) {
  return ((await fetch(urlPaginaAnterior)).json());
}
