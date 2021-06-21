import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ListProductsCreateInput {
  @Field()
  name: string;

  @Field()
  price: number;

  @Field()
  quantity: number;

  @Field()
  purchased: boolean;

  @Field()
  brand?: string;

  @Field()
  market?: string;
}