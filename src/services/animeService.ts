import api from "./api";
import { TopAnime } from "../models/Anime";

class animeService {
  public async getTop50Animes(page: number) {
    const data = <TopAnime> (await api.get(`top/anime/${page}`)).data;
    console.log("data", data);
    return data;
  }
}

export default new animeService();
