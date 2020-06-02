import { Resolver, Query, Arg } from "type-graphql";
import fetch from "node-fetch";
import TvResult from './../types/TvResult';
import { TvDetail } from "../types/TvDetail";
import { Credits } from "../types/Credits";
import Images from "../types/Images";

@Resolver(TvResult)
export default class TvResolver {

  url: string;
  key: string;

  constructor() {
    this.url = process.env.api_url as string;
    this.key = process.env.api_key as string;
  }

  @Query(returns => TvResult)
  async getPopularTv(
    @Arg("lang") lang: string,
    @Arg("page") page: number
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/popular?api_key=${key}&language=${lang}&page=${page}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvResult)
  async getTopRatedTv(
    @Arg("lang") lang: string,
    @Arg("page") page: number
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/top_rated?api_key=${key}&language=${lang}&page=${page}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvResult)
  async getTvOnAir(
    @Arg("lang") lang: string,
    @Arg("page") page: number
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/on_the_air?api_key=${key}&language=${lang}&page=${page}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvDetail)
  async getTvDetails(
    @Arg("tv_id") tv_id: number,
    @Arg("lang") lang: string
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/${tv_id}?api_key=${key}&language=${lang}`);
      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => Credits)
  async getTvCredits(
    @Arg("tv_id") tv_id:  number,
  ) {
    try { 
      const { key, url } = this;
      const response = await fetch(`${url}tv/${tv_id}/credits?api_key=${key}`);

      const data = await response.json();
      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => Images)
  async getTvImages(
    @Arg("tv_id") tv_id:  number,
    @Arg("lang") lang: string
  ){
    try { 
      const { key, url } = this;
      const response = await fetch(`${url}tv/${tv_id}/images?api_key=${key}`);
      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

  @Query(returns => TvResult)
  async getTvRecommendations(
    @Arg("id") id:  number,
    @Arg("lang") lang: string,
    @Arg("page") page: number
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/${id}/recommendations?api_key=${key}&language=${lang}&page=${page}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }


  @Query(returns => TvResult)
  async getTvSimilar(
    @Arg("id") id:  number,
    @Arg("lang") lang: string,
    @Arg("page") page: number
  ) {
    try {
      const { key, url } = this;
      const response = await fetch(`${url}tv/${id}/similar?api_key=${key}&language=${lang}&page=${page}`);

      const data = await response.json();

      return data;

    } catch (error) {
      console.log(error);
    }
  }

}
