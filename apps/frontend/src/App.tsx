import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { WeatherView } from "./pages/weather-view";

import "./index.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_END_POINT as string,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <WeatherView />
    </ApolloProvider>
  );
}

export default App;
