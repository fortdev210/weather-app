/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { WeatherService } from './weather.service';
import { WeatherModel } from './models/weather.model';

@Resolver((of) => WeatherModel)
export class WeatherResolver {
  constructor(private readonly weatherService: WeatherService) {}

  @Query((returns) => WeatherModel)
  async weather(@Args('city') city: string) {
    const weather = await this.weatherService.getWeatherByCity(city);
    if (!weather) {
      throw new NotFoundException(city);
    }
    return weather;
  }
}
