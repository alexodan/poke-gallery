import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import { useEffect } from "react";
import { fetchPokemonData } from "./api";
import { useTheme } from "./components/ThemeContext";
import styled, { withTheme } from "styled-components";

const StyledContainer = styled.div`
  margin: 10vh 10vw;
  height: 80vh;
  width: 80vw;
`;

function App() {
  const [pokemonId, setPokemonId] = useState(25);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const pokeTheme = useTheme();

  useEffect(() => {
    if (pokemonId) {
      console.log("Fetching by id...");
      fetchPokemonData(pokemonId).then((pokemon) => setPokemon(pokemon));
    }
  }, [pokemonId]);

  useEffect(() => {
    if (pokemonName) {
      console.log("Fetching by name...");
      fetchPokemonData(pokemonName).then((pokemon) => setPokemon(pokemon));
    }
  }, [pokemonName]);

  // TODO: infinite loop due to dependency check
  // useEffect(() => {
  //   pokeTheme.changeTheme(pokemon.type);
  // }, [pokemon]);

  return (
    <StyledContainer>
      <Pokemon pokemon={pokemon} />
    </StyledContainer>
  );
}

export default withTheme(App);
