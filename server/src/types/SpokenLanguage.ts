import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class SpokenLanguage {

  @Field()
  iso_639_1!: string;

  @Field()
  name!: string;
}