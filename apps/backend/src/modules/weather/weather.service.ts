import { Injectable } from '@nestjs/common';
import { WeatherModel } from './models/weather.model';
import { WeatherAPIService } from './weather.api';

@Injectable()
export class WeatherService {
  constructor(private readonly weatherAPIService: WeatherAPIService) {}

  async getWeatherByCity(city: string): Promise<WeatherModel> {
    const weather = await this.weatherAPIService.getWeatherByCity(city);
    return weather;
  }
}
