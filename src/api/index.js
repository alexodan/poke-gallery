import { PokemonModel } from "./PokemonModel";

const IMAGE_API_URL = "https://pokeres.bastionbot.org/images/pokemon";
const DATA_API_URL = "https://pokeapi.co/api/v2/pokemon";

const fetchDataApi = (query) => fetch(`${DATA_API_URL}/${query}`);

export const fetchPokemonData = (query) =>
  fetchDataApi(query)
    .then((res1) => res1.json())
    .then((data) => {
      const { id, name, height, weight, types, stats } = data;
      return PokemonModel(
        id,
        name,
        height,
        weight,
        `${IMAGE_API_URL}/${id}.png`,
        types,
        stats
      );
    });
