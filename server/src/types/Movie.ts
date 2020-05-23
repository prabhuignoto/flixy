import { ObjectType, Field, Int } from "type-graphql"

@ObjectType()
export default class Movie {

  @Field({ nullable!: true })
  adult!: boolean;

  @Field({ nullable!: true })
  backdrop_path!: string;

  @Field()
  id!: number;

  @Field()  
  original_language!: string;

  @Field()
  original_title!: string;

  @Field()
  overview!: string;

  @Field()
  popularity!: number;

  @Field({ nullable: true })
  poster_path!: string;

  @Field({ nullable: true })
  release_date!: string;

  @Field()
  title!: string;

  @Field()
  video!: boolean;

  @Field()
  vote_average!: number;

  @Field()
  vote_count!: number;

  @Field(type => [Int])
  genre_ids!: number[];
}