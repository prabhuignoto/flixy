import { ObjectType, Field } from "type-graphql";
import Image from "./Image";

@ObjectType()
export default class Images {
  @Field()
  id!: number;

  @Field(returns => [Image])
  backdrops!: Image[];

  @Field(returns => [Image])
  posters!: Image[];
}