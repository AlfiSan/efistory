import React from 'react';
import Grid from '@mui/material/Grid';
import './styles.scss';

const EmptyView = ({ title, desc }) => {
  return (
    <Grid container justify='center' width={'100%'} xs={{flex: 1, alignItems: 'center'}}>
    <div className='container-empty'>
      <div className='content-empty'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
    </Grid>
  );
};

export default EmptyView;
