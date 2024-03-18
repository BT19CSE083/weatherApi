import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CityController } from '../admin/city.controller';
import { CityService } from './city.service';
import { CitySchema } from './city.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'City', schema: CitySchema }])],
  controllers: [CityController],
  providers: [CityService],
  exports: [CityService], // Export CityService if needed in other modules
})
export class CityModule {}
