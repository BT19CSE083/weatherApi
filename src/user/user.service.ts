import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { City } from '../city/city.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectModel('City') private readonly cityModel: Model<City>,
  ) {}

  async getWeatherByCity(city: string) {
    const apiKey = this.configService.get<string>('OPENWEATHER_API_KEY');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
      const response = await this.httpService.get(apiUrl).toPromise();
      return response?.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }

  async getWeatherForAllCities() {
    try {
        const cities = await this.cityModel.find().exec();
        console.log("cityyyyyyyyy",cities)

        const weatherData = [];
  
        for await(const city of cities) {
          const cityWeather = await this.getWeatherByCity(city.name);
          weatherData.push({ city: city.name, weather: cityWeather });
        }
  
        return weatherData;
      } catch (error) {
        throw new Error('Failed to fetch weather data for all cities');
      }
  }
}
