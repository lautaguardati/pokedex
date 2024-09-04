import { buscarImagenDePokemon } from '../services/general.js';

const $pokemonSeleccionado = document.querySelector('#pokemon-seleccionado');

export function mostrarListaDePokemones(pokemones, callBackBuscarPokemon) {
  document.querySelector('#lista-de-pokemons').textContent = '';
  pokemones.forEach((pokemon) => {
    const $itemPokemon = document.createElement('div');
    $itemPokemon.id = pokemon.name;
    $itemPokemon.textContent = pokemon.name;
    $itemPokemon.dataset.url = pokemon.url;
    $itemPokemon.addEventListener('click', callBackBuscarPokemon);
    document.querySelector('#lista-de-pokemons').appendChild($itemPokemon);
  });
}

export function mostrarTextoDeEspera() {
  document.querySelector('#lista-de-pokemons').textContent = '';
  document.querySelector('#lista-de-pokemons').textContent = 'Cargando...';
}

export async function mostrarCaracteristicas(caracteristicas) {
  limpiarPokemonSeleccionado();
  quitarTextoCargando();
  mostrarNombre(caracteristicas.name);
  mostrarHabilidades(caracteristicas.abilities);
  mostrarExperiencia(caracteristicas.base_experience);
  mostrarAltura(caracteristicas.height);
  mostrarPeso(caracteristicas.weight);
  mostrarTipos(caracteristicas.types);
  mostrarImagen(await buscarImagenDePokemon(caracteristicas));
}

export function mostrarNombre(nombre) {
  const $nombrePokemon = document.createElement('div');
  $nombrePokemon.id = 'nombre-pokemon';
  $nombrePokemon.textContent = `${nombre} `;
  $pokemonSeleccionado.appendChild($nombrePokemon);
  $nombrePokemon.appendChild(document.createElement('br'));
}

export function mostrarImagen(imagen) {
  const $imagenPokemon = document.createElement('img');
  const objectURL = URL.createObjectURL(imagen);
  $imagenPokemon.src = objectURL;
  document.querySelector('#nombre-pokemon').appendChild($imagenPokemon);
}

export function mostrarHabilidades(habilidades) {
  const $nodoHabilidades = document.createElement('p');
  $nodoHabilidades.textContent = 'Habilidades:';

  for (let i = 0; i < habilidades.length; i += 1) {
    if (i === habilidades.length - 1) {
      $nodoHabilidades.textContent = `${$nodoHabilidades.textContent} ${habilidades[i].ability.name}.`;
    } else {
      $nodoHabilidades.textContent = `${$nodoHabilidades.textContent} ${habilidades[i].ability.name},`;
    }
  }
  $pokemonSeleccionado.appendChild($nodoHabilidades);
}

export function mostrarExperiencia(experiencia) {
  const $nodoExperiencia = document.createElement('p');
  $nodoExperiencia.textContent = `Experiencia: ${experiencia}`;
  $pokemonSeleccionado.appendChild($nodoExperiencia);
}

export function mostrarAltura(altura) {
  const $nodoAltura = document.createElement('p');
  $nodoAltura.textContent = `Altura: ${altura}`;
  $pokemonSeleccionado.appendChild($nodoAltura);
}

export function mostrarPeso(peso) {
  const $nodoPeso = document.createElement('p');
  $nodoPeso.textContent = `Peso: ${peso}`;
  $pokemonSeleccionado.appendChild($nodoPeso);
}

export function mostrarTipos(tipos) {
  const $nodoTipos = document.createElement('p');
  $nodoTipos.textContent = 'Tipo: ';

  for (let i = 0; i < tipos.length; i += 1) {
    if (i === tipos.length - 1) {
      $nodoTipos.textContent = `${$nodoTipos.textContent} ${tipos[i].type.name}.`;
    } else {
      $nodoTipos.textContent = `${$nodoTipos.textContent} ${tipos[i].type.name},`;
    }
  }
  $pokemonSeleccionado.appendChild($nodoTipos);
}

function limpiarPokemonSeleccionado() {
  $pokemonSeleccionado.textContent = '';
  $pokemonSeleccionado.textContent = 'Cargando...';
}

function quitarTextoCargando() {
  $pokemonSeleccionado.textContent = '';
}
