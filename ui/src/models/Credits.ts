import { Cast } from "./Cast";
import { Crew } from "./Crew";

export interface Credits {
  id: string;
  cast: Cast[];
  crew: Crew[];
}