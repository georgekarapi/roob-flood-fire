/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  map: {
    height: '100%',
    width: '100%',
  },
}));

const Map = ({ lat, long }) => {
  const classes = useStyles();
  const mapEl = useRef(null);

  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2thcmFwaSIsImEiOiJja2kya25rcHUxZW5hMnNvYW5vYWc1d2tpIn0.i3-Wxd8bAusPYp2R16fQtQ';

  useEffect(() => {
    console.log(lat);
    const map = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/gkarapi/cki4z3dbx1bst19rn9i2zmkug',
      center: [lat || 10.015, long || 44.895],
      attributionControl: false,
      zoom: 3.80,
    });

    return () => map.remove();
  }, []);

  return (
    <div ref={mapEl} className={classes.map} />
  );
};

Map.defaultProps = {
  lat: 43.015,
  long: 15.895,
};

Map.propTypes = {
  lat: PropTypes.number,
  long: PropTypes.number,
};

export default Map;
