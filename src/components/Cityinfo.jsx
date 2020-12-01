/* eslint-disable no-new-wrappers */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';

import getUserLocale from 'get-user-locale';

const wdk = require('wikidata-sdk');
const fetch = require('node-fetch');

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const Cityinfo = ({ viewport }) => {
  const classes = useStyles();
  const [data, setData] = useState({
    country: null,
    population: null,
    area: null,
    urban: null,
  });

  useEffect(() => {
    if (viewport.wikidata) {
      const ids = viewport.wikidata;
      const languages = ['en'];
      const props = ['info', 'claims'];
      const format = 'json';
      const redirections = false;
      const url = wdk.getEntities(ids, languages, props, format, redirections);

      fetch(url).then((res) => res.json())
        .then(wdk.parse.wd.entities).then((entities) => {
          const d = entities[Object.keys(entities)[0]].claims;
          setData({
            country: d.P17 || null,
            population: d.P1082 || null,
            area: d.P2046 || null,
          });
        });
    }
  }, [viewport]);
  return (
    <>
      <Box mb={4} mt={4}>
        <Typography variant="h5">{viewport.place}</Typography>
      </Box>
      <Box mt={4}>
        <Typography variant="h6">Population:</Typography>
        <Typography>{new Number(data.population).toLocaleString(getUserLocale())}</Typography>
      </Box>
      {data.area && (
        <Box mt={2}><Typography variant="h6">Area:</Typography>
          <Typography>{data.area} km²</Typography>
        </Box>
      )}
    </>
  );
};

Cityinfo.propTypes = {
  viewport: PropTypes.object.isRequired,
};

export default Cityinfo;
