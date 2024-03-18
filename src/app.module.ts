
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { CityModule } from './city/city.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { PassportModule } from '@nestjs/passport';
import { CityModel, CitySchema } from './city/city.model'; // Import CityModel and CitySchema

@Module({
  imports: [
    ConfigModule.forRoot(), // Import ConfigModule to load environment variables
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: process.env.MONGODB_URI, // Connect to MongoDB using environment variable
      }),
    }),
    HttpModule, // Import HttpModule for making HTTP requests
    CityModule,
    UserModule,
    AdminModule,
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]), // Include CitySchema in forFeature
  ],
  controllers: [AppController], // Include AppController if needed
  providers: [AppService], // Include AppService if needed
})
export class AppModule {}
