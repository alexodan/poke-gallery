import { PokemonModel } from "./PokemonModel";

// alternative for japanese name: https://github.com/sindresorhus/pokemon/blob/master/data/ja.json
// alternative api for the images: https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png

const IMAGE_API_URL = "https://pokeres.bastionbot.org/images/pokemon";
const DATA_API_URL = "https://pokeapi.co/api/v2/pokemon";
const JAP_NAME_API_URL =
  "https://cors-anywhere.herokuapp.com/http://www.saki-engineering.com/pokeapi/poke?limit=1&no=";

const fetchDataApi = (query) => fetch(`${DATA_API_URL}/${query}`);
const fetchJapName = (id) => fetch(`${JAP_NAME_API_URL}${id}`);

export const fetchPokemonData = (query) =>
  fetchDataApi(query)
    .then((res) => res.json())
    .then((data) => {
      return fetchJapName(data.id)
        .then((res) => res.json())
        .then((japData) => {
          const japName = japData.results[0].name;
          const { id, name, height, weight, types, stats } = data;
          return PokemonModel(
            id,
            name,
            height,
            weight,
            `${IMAGE_API_URL}/${id}.png`,
            types.map(({ type }) => type.name),
            stats,
            japName
          );
        });
    });
