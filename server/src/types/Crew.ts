import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Crew {

  @Field()
  // @Field({nullable: true})
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
  // @Field({nullable: true})
  name!: string;

  @Field({ nullable: true })
  profile_path!: string;

}