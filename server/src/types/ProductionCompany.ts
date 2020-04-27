import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ProductionCompany {

  @Field()
  id!: number;

  @Field()
  logo_path!: number;

  @Field()
  name!: string;

  @Field({nullable: true})
  origin_country!: string;
}