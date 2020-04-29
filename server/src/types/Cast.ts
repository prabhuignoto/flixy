import { ObjectType, Field } from "type-graphql";


@ObjectType()
export class Cast {

  @Field()
  cast_id!: number;
  
  @Field({nullable: true})
  gender!: number;
  
  @Field()
  credit_id!: string;
  
  @Field()
  character!: string;
  
  @Field()
  id!: number;
  
  @Field({nullable: true})
  name!: string;
  
  @Field({nullable: true})
  order!: number;

  @Field({nullable: true})
  profile_path!: string;

}