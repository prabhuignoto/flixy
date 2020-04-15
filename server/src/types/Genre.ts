import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Genre {

  @Field()
  id!: number;

  @Field()
  name!: string;
}