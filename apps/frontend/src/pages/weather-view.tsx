import { useState } from "react";

import { WeatherCard } from "../components/weather-card";
import { CitySelect } from "../components/city-select";

export const WeatherView: React.FC = () => {
  const [city, setCity] = useState("");

  return (
    <div className='w-full h-screen bg-[url(./assets/bg1.jpg)] flex items-center justify-center flex-col gap-10'>
      <CitySelect
        onChange={(value: string | undefined) => setCity(value || "NY")}
      />
      <WeatherCard city={city} />
    </div>
  );
};
