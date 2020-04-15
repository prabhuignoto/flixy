import { ObjectType, Field } from "type-graphql";
import Tv from "./Tv";

@ObjectType()
export default class TvResult {

  @Field()
  page!: number;

  @Field()
  total_results!: number;

  @Field()
  total_pages!: number;

  @Field(returns => [Tv])
  results!: Tv[]
}