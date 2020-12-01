/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  map: {
    position: 'absolute',
    width: '100%',
    top: 0,
    bottom: 0,
  },
}));

const Map = ({
  viewport, setViewport,
}) => {
  const classes = useStyles();
  const mapEl = useRef(null);

  mapboxgl.accessToken = process.env.apiMapbox;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapEl.current,
      style: 'mapbox://styles/gkarapi/cki4z3dbx1bst19rn9i2zmkug',
      center: [10.015, 44.895],
      attributionControl: false,
      maxZoom: 7.6,
      zoom: 3.80,
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl,
    });
    geocoder.setTypes('country,place');

    map.addControl(geocoder, 'top-left');
    map.addControl(new mapboxgl.NavigationControl());

    geocoder.on('result', (r) => {
      console.log(r);
      setViewport({
        place: r.result.text || null,
        lat: r.result.center[0] || null,
        long: r.result.center[1] || null,
        wikidata: r.result.properties.wikidata || null,
      });
    });
    return () => map.remove();
  }, []);

  return (
    <div ref={mapEl} className={classes.map} />
  );
};

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  setViewport: PropTypes.func.isRequired,
};

export default Map;
