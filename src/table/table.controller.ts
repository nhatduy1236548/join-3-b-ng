import { Controller, Get, Logger, Param } from '@nestjs/common';
import { TableService } from './table.service';
import { User } from './user.entity';

@Controller('table')
export class TableController {
    private readonly logger = new Logger(TableController.name);
    constructor(private tasksService: TableService) {}
    @Get('/:userId')
    getTasks(@Param('userId') userId:number): Promise<User> {
        return this.tasksService.getUserOrdersAndProducts(userId);
    }
}
