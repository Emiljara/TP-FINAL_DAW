import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Person } from 'src/persons/entities/person.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Person]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
