import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Season {
  @Field()
  air_date!: string;

  @Field()
  episode_count!: number;

  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  overview!: string;

  @Field()
  poster_path!: string;

  @Field()
  season_number!: number;

}