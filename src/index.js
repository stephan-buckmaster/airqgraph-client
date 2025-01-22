import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';
import './App.css';

import {  ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { LatestAirVisualDeviceMeasurement } from './LatestAirVisualDeviceMeasurement';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: process.env.REACT_APP_AIRQGRAPH_SERVER_URL,
  cache: new InMemoryCache(),
});

root.render(
  <div class="appWrapper">
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LatestAirVisualDeviceMeasurement />
    </ApolloProvider>
  </React.StrictMode>
  </div>
);
