import { gql, useQuery  } from '@apollo/client';

export const GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT = gql`
  query GetLatestAirVisualDeviceMeasurement {
    getLatestAirVisualDeviceMeasurement  {
    air_visual_device_measurement  {
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


export function LatestAirVisualDeviceMeasurement () {
  const { loading, error, data } = useQuery(GET_LATEST_AIRVISUAL_DEVICE_MEASUREMENT);

  if (loading) return(<div>Loading...</div>);
  if (error) return `Error! ${error.message}`;

  const d = data.getLatestAirVisualDeviceMeasurement.air_visual_device_measurement;
  const time = new Date(d.ts);
  const location = process.env.REACT_APP_LOCATION
  return (
<div id="air-quality-data">
  <h1 class="text-lg">Air Quality Data</h1>
  <dl class="table-row-group mb-4">
    <dt class="table-cell text-left w-1/2 whitespace-nowrap">Time</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {time.toString()}</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">Location</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {location}</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">Temperature</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.tp}°C</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">US AQI</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.aqius}</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">CN AQI</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.aqicn}</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">PM 1.0</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.pm1.conc} µg/m³</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">PM 2.5</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.pm25.conc} µg/m³</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">PM 10</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.pm10.conc} µg/m³</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">Pressure</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.pr/100} mbar</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">Humidity</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.hm} %</dd>

    <dt class="table-cell text-left w-1/2 whitespace-nowrap">CO2</dt>
    <dd class="table-cell text-right pl-6 pr-12 flex items-center font-bold"> {d.co2} ppm</dd>
  </dl>
</div>
  );
}
