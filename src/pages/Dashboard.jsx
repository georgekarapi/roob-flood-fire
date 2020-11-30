import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import SearchBar from '../components/SearchBar';
import Cityinfo from '../components/Cityinfo';
import Indicators from '../components/Indicators';
import Cardboard from '../components/Cardboard';
import Airquality from '../components/Airquality';
import Map from '../components/Map';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  container: {
    height: '100%',
  },
  searchbar: {
    zIndex: 999999,
    position: 'fixed',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [lat, setLat] = useState(40.6);
  const [long, setLong] = useState(22.9);

  return (
    <div className={classes.root}>
      <SearchBar />
      <Grid
        container
        direction="row"
        spacing={6}
        alignItems="stretch"
        className={classes.container}
      >
        <Grid item md={6} sm={12} xs={12}>
          <Cardboard title="City" subtitle="Country" child={<Cityinfo />} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Cardboard title="Environmental Indicators" child={<Indicators />} />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <Cardboard title="Air Quality" child={<Airquality lat={lat} long={long} />} />
        </Grid>
        <Grid item md={6} sm={12} xs={12} />
      </Grid>

    </div>
  );
};

export default Dashboard;
