import { Resolver, Query, Arg } from "type-graphql";
import fetch from "node-fetch";
import TvResult from './../types/TvResult';

@Resolver(TvResult)
export default class TVResolver {

  url: string;
  key: string;

  constructor() {
    this.url = process.env.api_url as string;
    this.key = process.env.api_key as string;
  }

  @Query(returns => TvResult)
  async getPopularTv(
    @Arg("lang") lang: string
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/popular?api_key=${key}&language=${lang}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvResult)
  async getTopRatedTv(
    @Arg("lang") lang: string
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/top_rated?api_key=${key}&language=${lang}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvResult)
  async getTvOnAir(
    @Arg("lang") lang: string
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/on_the_air?api_key=${key}&language=${lang}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

}
