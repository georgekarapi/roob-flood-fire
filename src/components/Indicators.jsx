import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const Indicators = () => {
  const classes = useStyles();
  return (
    <>
      <Box mt={4}>
        <Typography variant="h6">Possibility of Flood:</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Possibility of Fire:</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="h6">Renewable Energy consumption:</Typography>
      </Box>
    </>
  );
};

export default Indicators;
