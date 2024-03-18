
// @Module({
//   imports: [
//     HttpModule,
//     ConfigModule.forRoot(), //to provide access to ConfigService
//   ],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { HttpModule } from '@nestjs/axios';
// import { ConfigModule } from '@nestjs/config'; 
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { CitySchema } from '../city/city.model';
// @Module({
//   imports: [
//     HttpModule,
//     MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]), // Import CitySchema
//   ],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { HttpModule } from '@nestjs/axios'; // Import HttpModule from @nestjs/axios
// import { ConfigModule } from '@nestjs/config'; 
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { CitySchema } from '../city/city.model';

// @Module({
//   imports: [
//     HttpModule, // Import HttpModule from @nestjs/axios
//     MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]), // Import CitySchema
//   ],
//   controllers: [UserController],
//   providers: [UserService],
// })
// export class UserModule {}

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

