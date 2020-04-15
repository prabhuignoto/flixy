import { Resolver, Query, Arg } from "type-graphql";
import fetch from "node-fetch";
import Media from './../types/Media';

@Resolver(Media)
export default class TrendingResolver {

  @Query(returns => [Media])
  async getTrending(
    @Arg("mediaType") mediaType: string,
    @Arg("window") window: string
  ) {
    try {
      const url = process.env.api_url;
      const key = process.env.api_key;

      const response = await fetch(`${url}trending/${mediaType}/${window}?api_key=${key}`);

      const data = await response.json();

      return data.results;
    } catch (error) {
      console.log(error);
    }

  }

}