import React, { useState } from "react";
import "./App.css";
import Pokemon from "./components/Pokemon";
import { useEffect } from "react";
import { fetchDataApi } from "./api";

function App() {
  const [pokemonId, setPokemonId] = useState(25);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetchDataApi(pokemonId).then((pokemon) => setPokemon(pokemon));
  }, [pokemonId]);

  useEffect(() => {
    fetchDataApi(pokemonName).then((pokemon) => setPokemon(pokemon));
  }, [pokemonName]);

  return (
    <div className="App">
      <header className="App-header">Poke gallery</header>
      <Pokemon {...pokemon} />
    </div>
  );
}

export default App;
