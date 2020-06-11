import { Field, ObjectType } from "type-graphql";
import { Video } from "./Video";

@ObjectType()
export default class VideoResult {

  @Field()
  id!: number;

  @Field(returns => [Video])
  results!: Video[];
}