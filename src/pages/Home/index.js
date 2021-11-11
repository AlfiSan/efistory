import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '../../components/List';
import Header from '../../components/Header';

const dummyList = [
  { id: 1, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 2, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 3, komoditas: 'ikan tawar', size: '20', kota: 'jakarta' },
  { id: 4, komoditas: 'ikan laut', size: '30', kota: 'bandung' },
  { id: 5, komoditas: 'teri', size: '32', kota: 'medan' },
  { id: 6, komoditas: 'ikan laut', size: '34', kota: 'jogja' },
];

function Home() {
  const [search, setSearch] = useState('');

  return (
    <Grid container justify='center'>
      <Header search={search} setSearch={setSearch} />
      <List list={dummyList} onClickCard={(item) => console.log(item)} />
    </Grid>
  );
}

export default Home;
