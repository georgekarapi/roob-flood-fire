/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect, PureComponent } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from '@material-ui/core';

const RiskCard = () => {
  const [area, setArea] = useState('');
  const [insurance, setInsurance] = useState('');
  const [riskScore, setRiskScore] = useState('');

  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    if (area && insurance && riskScore && area !== 0 && insurance !== 0 && riskScore !== 0) {
      setTotalScore((area * insurance * riskScore).toFixed(3));
    }
  }, [area, insurance, riskScore]);
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <TextField
          label="Area"
          variant="outlined"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">m²</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Insurance Cost"
          variant="outlined"
          value={insurance}
          onChange={(e) => setInsurance(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">€/m²</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item>
        <TextField label="Risk Score" variant="outlined" value={riskScore} onChange={(e) => setRiskScore(e.target.value)} />
      </Grid>
      {totalScore !== 0 && (
        <Grid
          item
          style={{
            marginTop: 'auto',
            marginBottom: 'auto',
          }}
        >
          <Typography>
            <b>=</b>
            {totalScore}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default RiskCard;
