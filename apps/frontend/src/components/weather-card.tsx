import { gql, useQuery } from "@apollo/client";
import { useMemo } from "react";

import { formatDate } from "../utils/date-utils";
import {
  convertMeterToKilometers,
  convertKelvinToCelcius,
} from "../utils/converter";
import { determineIcon } from "../utils/others";

const GET_DATA = gql`
  query GetWeather($city: String!) {
    weather(city: $city) {
      weather {
        id
        main
        description
      }
      visibility
      main {
        temp
        temp_min
        temp_max
        humidity
      }
      wind {
        speed
      }
    }
  }
`;

interface WeatherCardProps {
  city: string;
}

export const WeatherCard = ({ city }: WeatherCardProps) => {
  const today = useMemo(() => formatDate(new Date()), []);
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { city: city },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { weather, visibility, main, wind } = data.weather;

  return (
    <div className='flex flex-col bg-white rounded p-4 w-full max-w-xs'>
      <div className='font-bold text-xl'>{city}</div>
      <div className='text-sm text-gray-500'>{today}</div>
      <div className='mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24'>
        {determineIcon(weather[0].id, true, "w-32 h-32")}
      </div>
      <div className='flex flex-row items-center justify-center mt-6'>
        <div className='font-medium text-6xl'>
          {convertKelvinToCelcius(main.temp)}°
        </div>
        <div className='flex flex-col items-center ml-6'>
          <div>{weather[0].main}</div>
          <div className='mt-1'>
            <span className='text-sm'>
              <i className='far fa-long-arrow-up'></i>
            </span>
            <span className='text-sm font-light text-gray-500'>
              {convertKelvinToCelcius(main.temp_min)}°C
            </span>
          </div>
          <div>
            <span className='text-sm'>
              <i className='far fa-long-arrow-down'></i>
            </span>
            <span className='text-sm font-light text-gray-500'>
              {convertKelvinToCelcius(main.temp_max)}°C
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-between mt-6'>
        <div className='flex flex-col items-center'>
          <div className='font-medium text-sm'>Wind</div>
          <div className='text-sm text-gray-500'>{wind.speed}k/h</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='font-medium text-sm'>Humidity</div>
          <div className='text-sm text-gray-500'>{main.humidity}%</div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='font-medium text-sm'>Visibility</div>
          <div className='text-sm text-gray-500'>
            {convertMeterToKilometers(visibility)}km
          </div>
        </div>
      </div>
    </div>
  );
};
