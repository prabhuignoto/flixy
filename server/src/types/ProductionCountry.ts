import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ProductionCountry {

  @Field()
  iso_3166_1!: string;

  @Field()
  name!: string;
}