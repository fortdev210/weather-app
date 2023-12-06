import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class WeatherAPIService {
  constructor(private configService: ConfigService) {}

  async getWeatherByCity(city: string) {
    const apiKey = this.configService.get<string>('weatherService.apiKey');
    const apiUrl = this.configService.get<string>('weatherService.url');
    const url = `${apiUrl}?q=${city}&APPID=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  }
}
