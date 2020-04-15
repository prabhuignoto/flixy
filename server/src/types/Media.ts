import { ObjectType, Field, Int } from "type-graphql";

@ObjectType()
export default class Media {

  @Field()
  id!: number;

  @Field({ nullable: true })
  original_title!: string;

  @Field({ nullable: true })
  title!: string;

  @Field({ nullable: true })
  name!: string;

  @Field({ nullable: true })
  originalName!: string;

  @Field()
  vote_count!: number;

  @Field()
  vote_average!: number;

  @Field()
  release_date!: string;

  @Field()
  poster_path!: string;

  @Field(type => [Int])
  genre_ids!: number[];

  @Field()
  original_language!: string;

  @Field()
  backdrop_path!: string;

  @Field()
  overview!: string;

  @Field(type => [String])
  origin_country!: string[];

  @Field()
  popularity!: number;

  @Field()
  adult!: boolean;
}