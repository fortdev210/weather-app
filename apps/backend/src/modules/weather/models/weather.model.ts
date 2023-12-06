import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Coord {
  @Field(() => Float)
  lon: number;

  @Field(() => Float)
  lat: number;
}

@ObjectType()
class Weather {
  @Field(() => Int)
  id: number;

  @Field()
  main: string;

  @Field()
  description: string;

  @Field()
  icon: string;
}

@ObjectType()
class MainWeatherInfo {
  @Field(() => Float)
  temp: number;

  @Field(() => Float)
  feels_like: number;

  @Field(() => Float)
  temp_min: number;

  @Field(() => Float)
  temp_max: number;

  @Field(() => Int)
  pressure: number;

  @Field(() => Int)
  humidity: number;
}

@ObjectType()
class Wind {
  @Field(() => Float)
  speed: number;

  @Field(() => Int)
  deg: number;
}

@ObjectType()
class Clouds {
  @Field(() => Int)
  all: number;
}

@ObjectType()
class Sys {
  @Field(() => Int)
  type: number;

  @Field(() => Int)
  id: number;

  @Field()
  country: string;

  @Field(() => Int)
  sunrise: number;

  @Field(() => Int)
  sunset: number;
}

@ObjectType()
export class WeatherModel {
  @Field(() => Coord)
  coord: Coord;

  @Field(() => [Weather])
  weather: Weather[];

  @Field()
  base: string;

  @Field(() => MainWeatherInfo)
  main: MainWeatherInfo;

  @Field(() => Int)
  visibility: number;

  @Field(() => Wind)
  wind: Wind;

  @Field(() => Clouds)
  clouds: Clouds;

  @Field(() => Int)
  dt: number;

  @Field(() => Sys)
  sys: Sys;

  @Field(() => Int)
  timezone: number;

  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field(() => Int)
  cod: number;
}
