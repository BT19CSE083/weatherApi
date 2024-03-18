import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config'; // Import ConfigModule
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CitySchema } from '../city/city.model';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]),
    ConfigModule.forRoot(), // Import ConfigModule and initialize it
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

