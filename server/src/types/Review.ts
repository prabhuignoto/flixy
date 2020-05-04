import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Review {

  @Field()
  id!: string;

  @Field()
  author!: string;

  @Field()
  content!: string;

  @Field()
  url!: string;

}