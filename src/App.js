import React from 'react';
import './App.scss';
import Grid from '@mui/material/Grid';
import List from './components/List';

const dummyList = [
  { id: 1, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 2, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 3, komoditas: 'ikan tawar', size: '20', kota: 'jakarta' },
  { id: 4, komoditas: 'ikan laut', size: '30', kota: 'bandung' },
  { id: 5, komoditas: 'teri', size: '32', kota: 'medan' },
  { id: 6, komoditas: 'ikan laut', size: '34', kota: 'jogja' },
];

function App() {
  return (
    <div className='layer'>
      <Grid container justify='center'>
        <List list={dummyList} onClickCard={(item) => console.log(item)} />
      </Grid>
    </div>
  );
}

export default App;
