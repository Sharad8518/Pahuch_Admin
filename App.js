/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AuthStack from './src/navigation/AuthStack';
import { AuthProvider } from './src/context/AuthContext';
import FlashMessage from "react-native-flash-message";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: 'https://pahunch-back.herokuapp.com/',
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <AuthProvider>
          <NavigationContainer>
            <AuthStack />
            <FlashMessage position="bottom"/>
          </NavigationContainer>
        </AuthProvider>
      </ApolloProvider>
    </>

  )
}


export default App;
