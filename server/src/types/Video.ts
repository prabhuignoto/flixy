import { Field, ObjectType } from "type-graphql"

@ObjectType()
export class Video {
  @Field()
  id!: string;

  @Field()
  iso_639_1!: string;

  @Field()
  iso_3166_1!: string;

  @Field()
  key!: string;

  @Field()
  name!: string;

  @Field()
  site!: string;

  @Field()
  size!: number;

  @Field()
  type!: string;
}