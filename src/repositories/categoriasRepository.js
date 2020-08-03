import { URL_BACKEND } from "../config";

const URL_CATEGORIES = `${URL_BACKEND}/categorias`;

async function getAll() {
  const response = await fetch(URL_CATEGORIES);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Não foi possível pegar os dados");
}

async function getAllWithVideos() {
  const response = await fetch(`${URL_CATEGORIES}?_embed=videos`);
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Não foi possível pegar os dados");
}


export default {
  getAllWithVideos,
  getAll
};
