import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { fetchPokemonData } from "./api";
import { useTheme } from "./components/ThemeContext";
import { withTheme } from "styled-components";
import { backgroundColor } from "./components/theme";
import styled from "styled-components";

import Pokemon from "./components/Pokemon";
import Search from "./components/Search";

const StyledContainer = styled.div`
  color: white;
  background-color: ${backgroundColor};
  max-width: 960px;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55vh;
  justify-content: space-around;
  flex-direction: column;
`;

function App() {
  const [pokemonId, setPokemonId] = useState(6);
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
    if (pokemon && pokemon.types)
      pokeTheme.changeTheme(
        pokemon.types[Math.floor(Math.random() * pokemon.types.length)]
      );
  }, [pokemon]);

  const searchById = (id) => {
    setPokemonId(id.value);
  };

  const searchByName = (name) => {
    setPokemonName(name.value);
  };

  return (
    <StyledContainer>
      {pokemon ? <Pokemon pokemon={pokemon} /> : null}
      <Search searchById={searchById} searchByName={searchByName} />
    </StyledContainer>
  );
}

export default withTheme(App);
