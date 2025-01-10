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

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  let d = data.getLatestAirVisualDeviceMeasurement.air_visual_device_measurement;
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
