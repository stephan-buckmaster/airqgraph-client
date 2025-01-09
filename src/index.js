import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LatestAirVisualDeviceMeasurement from './LatestAirVisualDeviceMeasurement';

import {  ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const client = new ApolloClient({
  uri: process.env.REACT_APP_AIRQGRAPH_SERVER_URL,
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LatestAirVisualDeviceMeasurement />
    </ApolloProvider>
  </React.StrictMode>
);
