import {
  obtenerImagen,
  obtenerInformacionDePokemon,
} from '../api/apiCalls.js';

export default function mostrarListaDePokemones(pokemones) {
  document.querySelector('#lista-de-pokemons').textContent = '';
  pokemones.forEach((pokemon) => {
    const $itemPokemon = document.createElement('div');
    $itemPokemon.id = pokemon.name;
    $itemPokemon.textContent = pokemon.name;
    $itemPokemon.dataset.url = pokemon.url;
    $itemPokemon.addEventListener('click', buscarInformacionDePokemon);

    document.querySelector('#lista-de-pokemons').appendChild($itemPokemon);
  });
}

async function buscarInformacionDePokemon(e) {
  limpiarPokemonSeleccionado();
  mostrarCaracteristicas(await obtenerInformacionDePokemon(e.target.dataset.url));
}

async function mostrarCaracteristicas(caracteristicas) {
  mostrarNombre(caracteristicas.name);
  mostrarImagen(await obtenerImagen(caracteristicas.sprites.front_default));
  mostrarHabilidades(caracteristicas.abilities);
  mostrarExperiencia(caracteristicas.base_experience);
  mostrarAltura(caracteristicas.height);
  mostrarPeso(caracteristicas.weight);
  mostrarTipos(caracteristicas.types);
}

const $pokemonSeleccionado = document.querySelector('#pokemon-seleccionado');

function mostrarNombre(nombre) {
  const $nombrePokemon = document.createElement('div');
  $nombrePokemon.id = 'nombre-pokemon';
  $nombrePokemon.textContent = `${nombre} `;
  $pokemonSeleccionado.appendChild($nombrePokemon);
  $nombrePokemon.appendChild(document.createElement('br'));
}

function mostrarImagen(imagen) {
  const $imagenPokemon = document.createElement('img');
  const objectURL = URL.createObjectURL(imagen);
  $imagenPokemon.src = objectURL;
  document.querySelector('#nombre-pokemon').appendChild($imagenPokemon);
}

function mostrarHabilidades(habilidades) {
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

function mostrarExperiencia(experiencia) {
  const $nodoExperiencia = document.createElement('p');
  $nodoExperiencia.textContent = `Experiencia: ${experiencia}`;
  $pokemonSeleccionado.appendChild($nodoExperiencia);
}

function mostrarAltura(altura) {
  const $nodoAltura = document.createElement('p');
  $nodoAltura.textContent = `Altura: ${altura}`;
  $pokemonSeleccionado.appendChild($nodoAltura);
}

function mostrarPeso(peso) {
  const $nodoPeso = document.createElement('p');
  $nodoPeso.textContent = `Peso: ${peso}`;
  $pokemonSeleccionado.appendChild($nodoPeso);
}

function mostrarTipos(tipos) {
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
}
