import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Episode {

  @Field()
  air_date!: string;

  @Field()
  episode_number!: number;

  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  overview!: string;

  @Field()
  production_code!: string;

  @Field()
  season_number!: number;

  @Field()
  show_id!: number;

  @Field()
  still_path!: string;

  @Field()
  vote_average!: number;

  @Field()
  vote_count!: number;
}