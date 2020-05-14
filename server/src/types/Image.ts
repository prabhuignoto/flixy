import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Image {
  
  @Field()
  aspect_ratio!: number;
  
  @Field()
  file_path!: string;
  
  @Field()
  height!: number;
  
  @Field()
  iso_639_1!: string;
  
  @Field()
  vote_average!: number;
  
  @Field()
  vote_count!: number;
  
  @Field()
  width!: number;

}