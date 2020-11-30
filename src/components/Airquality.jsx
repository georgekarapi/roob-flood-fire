/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useState, useEffect, PureComponent } from 'react';
import axios from 'axios';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const Airquality = ({ lat, long }) => {
  const apiKey = 'fa589bc88cc543be9d71984e717d3802';
  const url = 'https://api.weatherbit.io/v2.0/history/airquality';

  const [data, setData] = useState([]);

  useEffect(() => {
    if (lat !== null || long !== null) {
      axios.get(`${url}?lat=${lat}&lon=${long}&key=${apiKey}`)
        .then((res) => {
          console.log(res.data.data);
          const temp = res.data.data.map((p) => ({
            aqi: p.aqi,
            timestamp: new Date(p.timestamp_local).toLocaleDateString(),
          }));
          setData(temp.slice(Math.max(temp.length - 12, 0)));
        });
    }
  }, [lat, long]);
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="aqi" fill="#82ca9d" />
    </BarChart>
  );
};

Airquality.defaultProps = {
  lat: null,
  long: null,
};

Airquality.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
};

export default Airquality;
