/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
}));

const Cardboard = ({ title, subtitle, child }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box m={4}>
        <Box mb={4} mt={4}>
          <Box>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box>
            {subtitle && <Typography variant="caption">{subtitle}</Typography>}
          </Box>
        </Box>
        <Box mt={4}>
          {child}
        </Box>
      </Box>
    </Card>
  );
};

Cardboard.defaultProps = {
  title: '',
  subtitle: '',
};

Cardboard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  child: PropTypes.object.isRequired,
};

export default Cardboard;
