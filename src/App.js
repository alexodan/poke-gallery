import React, { useState } from "react";
import { useEffect } from "react";
import { fetchPokemonData } from "./api";
import styled from "styled-components";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";

const StyledContainer = styled.div`
  color: white;
  max-width: 960px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  justify-content: space-around;
  flex-direction: column;
`;

function App() {
  const [pokemonId, setPokemonId] = useState(6);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const searchById = (id) => {
    setPokemonId(id.value);
  };

  const searchByName = (name) => {
    setPokemonName(name.value);
  };

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

  return (
    <StyledContainer>
      {pokemon ? (
        <Pokemon pokemon={pokemon}>
          <Search searchById={searchById} searchByName={searchByName} />
        </Pokemon>
      ) : null}
    </StyledContainer>
  );
}

export default App;
