import { ObjectType, Field } from "type-graphql";
import Movie from "./Movie";

@ObjectType()
export default class MovieResult {

  @Field()
  page!: number;

  @Field()
  total_results!: number;

  @Field()
  total_pages!: number;

  @Field(returns => [Movie])
  results!: Movie[]
}