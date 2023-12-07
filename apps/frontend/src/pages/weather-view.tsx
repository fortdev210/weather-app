import { useState } from "react";

import { WeatherCard } from "../components/weather-card";
import { CitySelect } from "../components/city-select";
import { AVAILABLE_CITIES } from "../utils/constants";

export const WeatherView: React.FC = () => {
  const [city, setCity] = useState(AVAILABLE_CITIES[0].value);

  return (
    <div className='w-full h-screen bg-[url(./assets/bg1.jpg)] flex items-center justify-center'>
      <div className='min-h-[600px]'>
        <CitySelect
          onChange={(value: string) => setCity(value)}
          className='mb-10'
        />
        <WeatherCard city={city} />
      </div>
    </div>
  );
};
