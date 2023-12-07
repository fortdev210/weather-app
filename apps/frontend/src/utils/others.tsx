import {
  WiDayCloudy,
  WiDayFog,
  WiDayRain,
  WiDaySnow,
  WiDaySunny,
  WiDayThunderstorm,
  WiNightClear,
  WiNightCloudy,
  WiNightFog,
  WiNightRain,
  WiNightSnow,
  WiNightThunderstorm,
} from "react-icons/wi";
import { RiDrizzleLine } from "react-icons/ri";

export const determineIcon = (
  idOfWeather: number,
  day: boolean,
  classes?: string
) => {
  const firstDigit = (idOfWeather + "")[0];

  if (idOfWeather === 800) {
    return day ? (
      <WiDaySunny className={classes} />
    ) : (
      <WiNightClear className={classes} />
    );
  }

  switch (firstDigit) {
    case "2":
      return day ? (
        <WiDayThunderstorm className={classes} />
      ) : (
        <WiNightThunderstorm className={classes} />
      );
    case "3":
      return <RiDrizzleLine className={classes} />;
    case "5":
      return day ? (
        <WiDayRain className={classes} />
      ) : (
        <WiNightRain className={classes} />
      );
    case "6":
      return day ? (
        <WiDaySnow className={classes} />
      ) : (
        <WiNightSnow className={classes} />
      );
    case "7":
      return day ? (
        <WiDayFog className={classes} />
      ) : (
        <WiNightFog className={classes} />
      );
    case "8":
      return day ? (
        <WiDayCloudy className={classes} />
      ) : (
        <WiNightCloudy className={classes} />
      );
  }
};
