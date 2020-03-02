import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { LoremBox, StatusBox, SnapBox, useStyles } from './components/index';

function Doc() {
  return (
    <div style={{padding: '16px 10%'}}>
      <Grid container className={useStyles().root} spacing={4}>
        <Grid item sm={3}><SnapBox /></Grid>
        <Grid item sm={9}>
          <Grid container alignItems='center' spacing={2} direction={'column'}>
            <Grid item><StatusBox /></Grid>
            <Grid item><LoremBox /></Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

ReactDOM.render(<Doc />, document.getElementById('root'));