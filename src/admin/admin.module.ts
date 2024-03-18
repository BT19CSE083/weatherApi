import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CitySchema } from '../city/city.model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
   imports: [
    MongooseModule.forFeature([{ name: 'City', schema: CitySchema }]),
    PassportModule.register({ defaultStrategy: 'jwt' }), // Register PassportModule
    JwtModule.register({ // Register JwtModule with options
      secret: 'prudhvi', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Set token expiration time
    }),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}