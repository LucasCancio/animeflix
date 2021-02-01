import { Anime } from "../models/Anime";
import Video from "../models/Video";

function convertAnimeToVideo(anime: Anime): Video {
  return <Video>{
    id: anime.mal_id,
    titulo: anime.title,
    url: anime.url,
    image_url: anime.image_url,
  };
}

export { convertAnimeToVideo };
