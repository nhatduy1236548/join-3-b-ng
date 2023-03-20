import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';
import { TableController } from './table.controller';
import { TableService } from './table.service';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, Order, Product
    ])
  ],
  controllers: [TableController],
  providers: [TableService]
})
export class TableModule {}
