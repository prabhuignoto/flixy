import { ObjectType, Field } from "type-graphql";
import { Cast } from "./Cast";
import { Crew } from "./Crew";

@ObjectType()
export class Credits {

  @Field(returns => [Cast])
  cast!: Cast[];

  @Field(returns => Crew)
  crew!: Crew[];

  @Field()
  id!: number;

}