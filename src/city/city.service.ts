import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City, CitySchema } from './city.model'; // Import City and CitySchema

@Injectable()
export class CityService {
  // constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  // async addCity(name: string): Promise<City> {
  //   const city = new this.cityModel({ name });
  //   return city.save();
  // }
}

