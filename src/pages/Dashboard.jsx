import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

import Cityinfo from '../components/Cityinfo';
import Cardboard from '../components/Cardboard';
import RiskCard from '../components/RiskCard';
import Map from '../components/Map';

const useStyles = makeStyles((theme) => ({
  map: {
    zIndex: 1,
  },
  panel: {
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [viewport, setViewport] = useState({
    place: null,
    lat: null,
    long: null,
    wikidata: null,
  });

  return (
    <div className={classes.root}>
      <Map className={classes.map} viewport={viewport} setViewport={setViewport} />
      <Slide direction="up" in={viewport.place} mountOnEnter unmountOnExit>
        <Grid container className={classes.panel}>
          <Grid item md={6} sm={6} xs={12}>
            <Cardboard child={<Cityinfo viewport={viewport} />} />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Cardboard title="Risk Calculator" child={<RiskCard />} />
          </Grid>
        </Grid>
      </Slide>
    </div>
  );
};

export default Dashboard;
