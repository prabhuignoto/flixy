import { Field, ObjectType } from "type-graphql";
import { Genre } from ".";
import ProductionCompany from "./ProductionCompany";
import { CreatedBy } from "./CreatedBy";
import { Episode } from "./Episode";

@ObjectType()
export class TvDetail {

  @Field({ nullable: true })
  backdrop_path!: string;

  @Field(returns => [Genre], { nullable: true })
  genres!: Genre[];

  @Field({ nullable: true })
  homepage!: string;

  @Field()
  id!: number;

  @Field({ nullable: true })
  original_language!: string;

  @Field({ nullable: true })
  original_name!: string;

  @Field({ nullable: true })
  overview!: string;

  @Field({ nullable: true })
  popularity!: number;

  @Field({ nullable: true })
  poster_path!: string;

  @Field(returns => [ProductionCompany], { nullable: true })
  production_companies!: ProductionCompany[];

  @Field({ nullable: true })
  first_air_date!: string;

  @Field({ nullable: true })
  last_air_date!: string;

  @Field({ nullable: true })
  episode_run_time!: number;

  @Field({ nullable: true })
  status!: string;

  @Field({ nullable: true })
  vote_average!: number;

  @Field({ nullable: true })
  vote_count!: number;

  @Field(returns => [CreatedBy])
  created_by!: CreatedBy[];

  @Field(returns => Episode)
  last_episode_to_air!: Episode;

  @Field()
  number_of_episodes!: number;

  @Field()
  number_of_seasons!: number;


}