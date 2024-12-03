import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { gql, useQuery,  ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT = gql`
  query GetLatestAirvisualDeviceMeasurement {
    getLatestAirvisualDeviceMeasurement  {
    airvisual_device_measurement  {
      id
      ts
      pm25 { conc }
      pm10 { conc }
      pm1 { conc }
      tp
      pr
      hm
      co2
      aqius
      aqicn
    }
}
  }
`;


function LatestAirvisualDeviceMeasurement () {
  const { loading, error, data } = useQuery(GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let d = data.getLatestAirvisualDeviceMeasurement.airvisual_device_measurement;
  return (
	  <div>
	  	<h1>Air Quality Data</h1>
		<dl>
		  <dt>Timestamp</dt><dd>{d.ts}</dd>
		  <dt>Temperature</dt><dd>{d.tp} °C</dd>
		  <dt>Humidity</dt><dd>{d.hm} %</dd>
		  <dt>Pressure</dt><dd>{d.pr/100} mbar</dd>
		  <dt>US AQI</dt><dd>{d.aqius}</dd>
		  <dt>CN AQI</dt><dd>{d.aqicn}</dd>
		  <dt>PM2.5</dt><dd>{d.pm25.conc} µg/m³</dd>
		  <dt>PM10</dt><dd>{d.pm10.conc} µg/m³</dd>
		  <dt>PM1.0</dt><dd>{d.pm1.conc} µg/m³</dd>
		  <dt>CO2</dt><dd>{d.co2} ppm</dd>
       </dl>
	</div>
  );
}


const client = new ApolloClient({
  uri: process.env.REACT_APP_AIRQGRAPH_SERVER_URL,
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<ApolloProvider client={client}>
      <LatestAirvisualDeviceMeasurement />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
