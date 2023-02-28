import React from 'react';
import PokemonCard from './PokemonCard';
import './styles/ListPokemons.css';

const ListPokemons = ({ pokemons }) => {
  return (
    <section className="listPokemons">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.url} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default ListPokemons;
