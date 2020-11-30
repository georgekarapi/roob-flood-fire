import { Box, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const Cityinfo = () => {
  const classes = useStyles();
  return (
    <>
      <Box mt={4}>
        <Typography variant="h6">Population:</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Area:</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Urban density:</Typography>
      </Box>
    </>
  );
};

export default Cityinfo;
