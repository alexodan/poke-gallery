const IMAGE_API_URL = "https://pokeres.bastionbot.org/images/pokemon";
const DATA_API_URL = "https://pokeapi.co/api/v2/pokemon";

export const fetchImageApi = (id) =>
  fetch(`${IMAGE_API_URL}/${id}.png`).then((res) => res.json());

export const fetchDataApi = (query) =>
  fetch(`${DATA_API_URL}/${query}`).then((res) => res.json());
