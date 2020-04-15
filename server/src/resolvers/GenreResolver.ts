import { Resolver, Query } from "type-graphql";
import { Genre } from "../types";
import fetch from "node-fetch";

@Resolver(Genre)
export default class GenreResolver {

  @Query(returns => [Genre])
  async getAllGenres() {
    const url = process.env.api_url;
    const key = process.env.api_key;
    
    const response = await fetch(`${url}genre/movie/list?api_key=${key}`);
    const data = await response.json();

    return data.genres;
  }
}