import { Field, ObjectType } from "type-graphql";
import { Genre } from ".";
import ProductionCompany from "./ProductionCompany";
import ProductionCountry from "./ProductionCountry";
import SpokenLanguage from "./SpokenLanguage";

@ObjectType()
export class MovieDetail {

  @Field()
  adult!: boolean;

  @Field({nullable: true})
  backdrop_path!: string;

  @Field()
  budget!: number;

  @Field(returns => [Genre])
  genres!: Genre[];

  @Field({nullable: true})
  homepage!: string;

  @Field()
  id!: number;

  @Field({nullable: true})
  imdb_id!: string;

  @Field({nullable: true})
  original_language!: string;

  @Field()
  original_title!: string;

  @Field({nullable: true})
  overview!: string;

  @Field()
  popularity!: number;

  @Field({nullable: true})
  poster_path!: string;

  @Field(returns => [ProductionCompany])
  production_companies!: ProductionCompany[];

  @Field(returns => [ProductionCountry])
  production_countries!: ProductionCountry[];

  @Field()
  release_date!: string;

  @Field()
  revenue!: number;

  @Field()
  runtime!: number;

  @Field(returns => [SpokenLanguage])
  spoken_languages!: SpokenLanguage[];

  @Field()
  status!: string;

  @Field({nullable: true})
  tagline!: string;

  @Field()
  title!: string;

  @Field()
  video!: boolean;

  @Field()
  vote_average!: number;

  @Field()
  vote_count!: number;

}