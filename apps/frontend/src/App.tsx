import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { WeatherCard } from "./components/weather-card";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <WeatherCard />
    </ApolloProvider>
  );
}

export default App;
