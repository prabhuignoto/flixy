import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class CreatedBy {

  @Field()
  id!: number;

  @Field()
  credit_id!: string;

  @Field()
  name!: string;

  @Field()
  gender!: number;

  @Field()
  profile_path!: string;
}