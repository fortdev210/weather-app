export const convertMeterToKilometers = (meter: number) => {
  return meter / 1000;
};

export const convertFarenheitToCelcius = (farenheit: number): string => {
  const celcius = (farenheit - 32) * (5 / 9);
  return celcius.toFixed(2);
};

export const convertKelvinToCelcius = (kelvin: number): string => {
  const celcius = kelvin - 273.15;
  return celcius.toFixed(2);
};
