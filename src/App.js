import React, { useState } from "react";
import { useEffect } from "react";
import { fetchPokemonData } from "./api";
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import { StyledContainer } from "./styles.css";

function App() {
  const [pokemonId, setPokemonId] = useState(197);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetchPokemonData({
      searchId: pokemonId,
      searchName: pokemonName,
    }).then((pokemon) => setPokemon(pokemon));
  }, [pokemonId, pokemonName]);

  return (
    <StyledContainer>
      {pokemon ? (
        <Pokemon pokemon={pokemon}>
          <Search
            searchById={(id) => setPokemonId(id.value)}
            searchByName={(name) => setPokemonName(name.value)}
          />
        </Pokemon>
      ) : null}
    </StyledContainer>
  );
}

export default App;
