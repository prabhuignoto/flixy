import { ObjectType, Field } from "type-graphql";
import Movie from "./Movie";
import Review from "./Review";

@ObjectType()
export default class ReviewResult {

  @Field()
  id!: number;

  @Field()
  page!: number;

  @Field()
  total_results!: number;

  @Field()
  total_pages!: number;

  @Field(returns => [Review])
  results!: Review[]
}