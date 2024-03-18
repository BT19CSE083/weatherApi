import { Controller, Post, Body } from '@nestjs/common';
import { CityService } from '../city/city.service';

@Controller('city')
export class CityController {
  // constructor(private readonly cityService: CityService) {}

  // @Post()
  // async addCity(@Body('name') cityName: string) {
  //   try {
  //     const result = await this.cityService.addCity(cityName);
  //     return { success: true, data: result };
  //   } catch (error) {
  //     return { success: false, error: error.message };
  //   }
  // }
}
