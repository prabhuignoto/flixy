import { Field, ObjectType } from "type-graphql";
import { Genre } from ".";
import ProductionCompany from "./ProductionCompany";
import ProductionCountry from "./ProductionCountry";
import SpokenLanguage from "./SpokenLanguage";

@ObjectType()
export class MovieDetail {

  @Field({ nullable: true })
  adult!: boolean;

  @Field({ nullable: true })
  backdrop_path!: string;

  @Field({ nullable: true })
  budget!: number;

  @Field(returns => [Genre], { nullable: true })
  genres!: Genre[];

  @Field({ nullable: true })
  homepage!: string;

  @Field()
  id!: number;

  @Field({ nullable: true })
  imdb_id!: string;

  @Field({ nullable: true })
  original_language!: string;

  @Field({ nullable: true })
  original_title!: string;

  @Field({ nullable: true })
  overview!: string;

  @Field({ nullable: true })
  popularity!: number;

  @Field({ nullable: true })
  poster_path!: string;

  @Field(returns => [ProductionCompany], { nullable: true })
  production_companies!: ProductionCompany[];

  @Field(returns => [ProductionCountry], { nullable: true })
  production_countries!: ProductionCountry[];

  @Field({ nullable: true })
  release_date!: string;

  @Field({ nullable: true })
  revenue!: number;

  @Field({ nullable: true })
  runtime!: number;
  
  @Field(returns => [SpokenLanguage], { nullable: true })
  spoken_languages!: SpokenLanguage[];
  
  @Field({ nullable: true })
  status!: string;
  
  @Field({ nullable: true })
  tagline!: string;
  
  @Field({ nullable: true })
  title!: string;
  
  @Field({ nullable: true })
  video!: boolean;
  
  @Field({ nullable: true })
  vote_average!: number;
  
  @Field({ nullable: true })
  vote_count!: number;

}