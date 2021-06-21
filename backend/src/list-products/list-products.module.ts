import { Module } from '@nestjs/common';
import { ListProductsService } from './list-products.service';
import { ListProductsResolver } from './list-products.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListProduct } from './list-product.entity';
import { ShoppingListsModule } from '../shopping-lists/shopping-lists.module';

@Module({
  imports: [TypeOrmModule.forFeature([ListProduct]), ShoppingListsModule],
  providers: [ListProductsService, ListProductsResolver],
})
export class ListProductsModule {}