import { PokemonModel } from "./PokemonModel";

const IMAGE_API_URL = "https://pokeres.bastionbot.org/images/pokemon";
const DATA_API_URL = "https://pokeapi.co/api/v2/pokemon";

const JAP_NAME_API_URL =
  "https://raw.githubusercontent.com/sindresorhus/pokemon/master/data/ja.json";

const fetchDataApi = (query) =>
  fetch(`${DATA_API_URL}/${query}`).then((res) => res.json());
const fetchJapNames = () =>
  fetch(`${JAP_NAME_API_URL}`).then((res) => res.json());

export const fetchPokemonData = async ({ searchId, searchName }) => {
  const data = await fetchDataApi(searchId || searchName);
  const names = await fetchJapNames();
  const japaneseName = names[+data.id + 1];
  const { id, name, height, weight, types, stats } = data;
  return PokemonModel(
    id,
    name,
    height,
    weight,
    `${IMAGE_API_URL}/${id}.png`,
    types.map(({ type }) => type.name),
    stats,
    japaneseName
  );
};
