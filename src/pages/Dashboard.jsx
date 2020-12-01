import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

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
  map: {
    zIndex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  searchbar: {
    zIndex: 2,
    position: 'fixed',
    top: 0,
    left: 0,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [lt, setLat] = useState(null);
  const [ln, setLong] = useState(null);

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  console.log(value);
  useEffect(() => {
    if (value) {
      // if (value.value.terms.length > 2) {
      //   setCity(value.value.terms[0]);
      //   setCountry(value.value.terms[value.value.terms.length - 1]);
      // } else {
      //   setCity(value.value.terms[1]);
      // }
      geocodeByAddress(value.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setLat(lat);
          setLong(lng);
        });
    }
  }, [value]);
  return (
    <div className={classes.root}>
      {!value && (
      <Grid
        container
        className={classes.searchbar}
      >
        <Grid item md={4}>
          <Box m={4}>
            <GooglePlacesAutocomplete
              apiKey="AIzaSyCQWG-LcExyO1v7C51TM-otvBLwI9p0SyA"
              selectProps={{
                onChange: setValue,
              }}
              p
            />
          </Box>
        </Grid>
      </Grid>
      )}
      {!value ? (
        <div className={classes.map}>
          <Map lat={lt} long={ln} />
        </div>
      )
        : (
          <>
            <Grid
              container
            >
              <Grid item md={6}>
                <GooglePlacesAutocomplete
                  apiKey="AIzaSyCQWG-LcExyO1v7C51TM-otvBLwI9p0SyA"
                  selectProps={{
                    onChange: setValue,
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="column"
              spacing={6}
              alignItems="stretch"
              className={classes.container}
            >
              <Grid item md={6} sm={12} xs={12}>
                <Cardboard
                  title={city || 'City'}
                  subtitle={country || 'Country'}
                  child={<Cityinfo />}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Cardboard
                  title="Air Quality"
                  child={<Airquality lat={lt} long={ln} />}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Cardboard title="Map" child={<Map lat={lt} long={ln} />} />
              </Grid>
            </Grid>
          </>
        )}

    </div>
  );
};

export default Dashboard;
