/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect, PureComponent } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const Airquality = ({ viewport }) => {
  const { apiWeatherBitKey } = process.env;
  const url = 'https://api.weatherbit.io/v2.0/history/airquality';

  const [data, setData] = useState([]);

  useEffect(() => {
    if (viewport.lat !== null || viewport.long !== null) {
      axios.get(`${url}?lat=${viewport.lat}&lon=${viewport.long}&key=${apiWeatherBitKey}`)
        .then((res) => {
          if (res.data.data) {
            const temp = res.data.data.map((p) => ({
              aqi: p.aqi,
              timestamp: new Date(p.timestamp_local).toLocaleDateString(),
            }));
            setData(temp.slice(Math.max(temp.length - 12, 0)));
          } else {
            setData(null);
          }
        });
    }
  }, [viewport]);
  return (
    <Grid container justify="center">
      <Grid item>
        {!data ? <Typography>Sorry doesn&apos;t exist in the database :/</Typography>
          : (
            <BarChart
              width={460}
              height={180}
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="aqi" fill="#82ca9d" />
            </BarChart>
          )}
      </Grid>
    </Grid>
  );
};

Airquality.propTypes = {
  viewport: PropTypes.object.isRequired,
};

export default Airquality;
