/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { WeatherService } from './weather.service';
import { WeatherModel } from './models/weather.model';

const pubSub = new PubSub();

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
