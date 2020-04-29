import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class Crew {

  @Field()
  credit_id!: string;

  @Field()
  department!: string;

  @Field()
  gender!: number;

  @Field()
  id!: number;

  @Field()
  job!: string;

  @Field()
  name!: string;

  @Field()
  profile_path!: string;

}