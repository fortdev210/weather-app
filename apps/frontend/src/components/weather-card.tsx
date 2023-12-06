import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query GetWeather($city: String!) {
    weather(city: $city) {
      id
      coord {
        lon
        lat
      }
      weather {
        id
        main
        description
      }
    }
  }
`;

export const WeatherCard = () => {
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { city: "London" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{data.weather.id}</div>;
};
