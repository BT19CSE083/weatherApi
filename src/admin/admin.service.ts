// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// @Injectable()
// export class AdminService {
//   constructor(@InjectModel('City') private readonly cityModel: Model<any>) {}

//   async addCity(cityData: any) {
//     const city = new this.cityModel(cityData);
//     return city.save();
//   }
// }
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from 'src/city/city.model';


@Injectable()
export class AdminService {
  constructor(@InjectModel('City') private readonly cityModel: Model<City>) {}

  /**
   * Add a new city.
   * @param cityData Object containing city information.
   * @returns The newly created city object.
   */
  async addCity(cityData: any): Promise<City> {
    const city = new this.cityModel(cityData);
    return city.save();
  }
}
