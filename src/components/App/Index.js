import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { CssBaseline } from "@material-ui/core";
import "typeface-roboto";
import Routes from "../../routes/Index";

// Link del Servidor
const httpLink = {
  uri: process.env.REACT_APP_GRAPHQL || "http://localhost:4000/graphql"
};

// Cliente de Apollo
const client = new ApolloClient({
  link: new HttpLink(httpLink),
  cache: new InMemoryCache()
});

const Index = () => {
  return (
    <ApolloProvider client={client}>
      <CssBaseline />
      <Routes />
    </ApolloProvider>
  );
};

export default Index;
