import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './table/order.entity';
import { Product } from './table/product.entity';
import { TableModule } from './table/table.module';
import { User } from './table/user.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'postgres',
    database: 'three',
    entities: [Product,User,Order],
    autoLoadEntities:true,
    synchronize:true,
  }),TableModule],
})
export class AppModule {}
