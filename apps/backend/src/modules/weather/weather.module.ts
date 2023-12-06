import { Module } from '@nestjs/common';

import { WeatherAPIService } from './weather.api';
import { WeatherService } from './weather.service';
import { WeatherResolver } from './weather.resolver';

@Module({
  providers: [WeatherResolver, WeatherService, WeatherAPIService],
})
export class WeatherModule {}
