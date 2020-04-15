import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export default class Tv {
  @Field()
  id!: number;
  
  @Field()
  name!: string;

  @Field()
  original_name!: string;

  @Field()
  vote_average!: number;

  @Field()
  vote_count!: number;

  @Field()
  original_language!: string;

  @Field(type => [Int])
  genre_ids!: number[];

  @Field(type => [String])
  origin_country!: number[];

  @Field()
  first_air_date!: string;

  @Field()
  overview!: string;

  @Field({ nullable!: true })
  backdrop_path!: string;

  @Field()
  popularity!: number;

  @Field({ nullable: true })
  poster_path!: string;
}