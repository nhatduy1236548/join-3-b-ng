import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class TableService {
  private readonly logger= new Logger(TableService.name);
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
      ) {}
    
      async getUserOrdersAndProducts(userId: number): Promise<User> {
        this.logger.log(`${userId}`);
        const user = await this.userRepository
          .createQueryBuilder('user')
          .leftJoinAndSelect('user.orders', 'order')
          .leftJoinAndSelect('user.products', 'product')
          .where('user.id = :userId', { userId })
          .getOne();
    
        return user;
      }
}
