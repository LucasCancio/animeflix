export interface Anime {
  mal_id: number;
  rank: number;
  title: string;
  url: string;
  image_url: string;
  type: string;
  episodes?: number;
  start_date: string;
  end_date: string;
  members: number;
  score: number;
}

export interface TopAnime {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  top: Anime[];
}
