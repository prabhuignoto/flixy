import { Episode } from "./Episode";
import { CreatedBy } from "./CreatedBy";
import { ProductionCompany } from "./ProductionCompany";
import { Genre } from "./Genre";

export interface TvDetail {

  backdrop_path: string;

  genres: Genre[];

  homepage?: string;

  id: number;

  original_language?: string;

  original_name?: string;

  overview: string;

  popularity?: number;

  poster_path?: string;

  production_companies: ProductionCompany[];

  first_air_date: string;

  last_air_date: string;

  episode_run_time: number;

  status?: string;

  vote_average?: number;

  vote_count?: number;

  created_by?: CreatedBy[];

  last_episode_to_air?: Episode;

  number_of_episodes?: number;

  number_of_seasons?: number;


}