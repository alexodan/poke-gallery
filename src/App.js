import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import { useEffect } from "react";
import { fetchPokemonData } from "./api";
import { useTheme } from "./components/ThemeContext";
import { withTheme } from "styled-components";

function App() {
  const [pokemonId, setPokemonId] = useState(94);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const pokeTheme = useTheme();

  useEffect(() => {
    if (pokemonId) {
      fetchPokemonData(pokemonId).then((pokemon) => setPokemon(pokemon));
    }
  }, [pokemonId]);

  useEffect(() => {
    if (pokemonName) {
      fetchPokemonData(pokemonName).then((pokemon) => setPokemon(pokemon));
    }
  }, [pokemonName]);

  useEffect(() => {
    // If there is more than one random select
    if (pokemon && pokemon.types)
      pokeTheme.changeTheme(
        pokemon.types[Math.floor(Math.random() * pokemon.types.length)]
      );
  }, [pokemon]);

  return (
    <div className="App">{pokemon ? <Pokemon pokemon={pokemon} /> : null}</div>
  );
}

export default withTheme(App);
