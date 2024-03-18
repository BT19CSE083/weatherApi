import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UserCityDataDto } from './user-city.dto';
// import { UserCityDataDto } from 'src/city/user-city.dto';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('weather')
  //@ApiBody({ type: UserCityDataDto })
  @ApiQuery({name: 'city', type:String, required: false })
  async getWeather(@Query('city') city?: string) {
    try {
      if (city ) {
        // If city query parameter is provided, get weather for that city
        const weather = await this.userService.getWeatherByCity(city);
        return { success: true, data: weather };
      } else {
        // If city query parameter is not provided, get weather for all configured cities
        const weather = await this.userService.getWeatherForAllCities();
        return { success: true, data: weather };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

