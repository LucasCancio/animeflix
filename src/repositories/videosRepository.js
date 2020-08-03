import { URL_BACKEND } from "../config";

const URL_VIDEOS = `${URL_BACKEND}/videos`;

async function create(video) {
  const response = await fetch(URL_VIDEOS, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(video),
  });
  if (response.ok) {
    return await response.json();
  }
  throw new Error("Não foi possível pegar os dados");
}

export default {
  create,
};
