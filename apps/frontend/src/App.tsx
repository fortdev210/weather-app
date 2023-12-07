import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { WeatherView } from "./pages/weather-view";

import "./index.css";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
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
