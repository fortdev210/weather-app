export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  weatherService: {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    apiKey: process.env.OPEN_WEATHER_API_KEY,
  },
});
