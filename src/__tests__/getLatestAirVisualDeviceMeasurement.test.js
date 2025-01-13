import React from 'react';
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT, LatestAirVisualDeviceMeasurement } from '../LatestAirVisualDeviceMeasurement';

const mocks = [
  {
    request: {
      query: GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT,
      variables: {}
    },
    result: {
      data: {
        getLatestAirVisualDeviceMeasurement: {
          air_visual_device_measurement: {
            id: '1',
            ts: '2024-12-03T02:11:11.000Z',
            pm25: { conc: 35.5 },
            pm10: { conc: 42.0 },
            pm1: { conc: 15.0 },
            tp: 23,
            pr: 101325,
            hm: 95,
            co2: 600,
            aqius: 75,
            aqicn: 80,
          },
        },
      },
    },
  },
];


test('renders air quality data correctly', async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <LatestAirVisualDeviceMeasurement />
    </MockedProvider>
  );

  // Optionally, wait for specific query to resolve
  const timestamp = await screen.findByText('2024-12-03T02:11:11.000Z');
  expect(timestamp).toBeInTheDocument();
  expect(screen.getByText('Temperature')).toBeInTheDocument();
  expect(screen.getByText(/23 °C/i)).toBeInTheDocument();
  expect(screen.getByText(/95 %/i)).toBeInTheDocument();
  expect(screen.getByText(/1013.25 mbar/i)).toBeInTheDocument();
  expect(screen.getByText(/75/)).toBeInTheDocument(); // US AQI
  expect(screen.getByText(/80/)).toBeInTheDocument(); // CN AQI
  expect(screen.getByText(/35.5 µg\/m³/)).toBeInTheDocument(); // PM2.5
  expect(screen.getByText(/42 µg\/m³/)).toBeInTheDocument(); // PM10
  expect(screen.getByText(/15 µg\/m³/)).toBeInTheDocument(); // PM1.0
  expect(screen.getByText(/600 ppm/)).toBeInTheDocument(); // CO2
});

 
test('displays loading state initially', async() => {
  render( 
    <MockedProvider mocks={[]} addTypename={false}>{/* No mocks means it will stay in loading */}
      <LatestAirVisualDeviceMeasurement />
    </MockedProvider>
  );

  expect(screen.getByText('Loading...')).toBeInTheDocument();
});
