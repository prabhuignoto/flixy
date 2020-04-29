import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class ProductionCompany {

  @Field()
  id!: number;

  @Field({nullable: true})
  logo_path!: string;

  @Field()
  name!: string;

  @Field({nullable: true})
  origin_country!: string;
}