import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import List from '../../components/List';
import Header from '../../components/Header';
import { getData } from '../../helpers/actions';

const dummyList = [
  { id: 1, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 2, komoditas: 'ikan laut', size: '30', kota: 'jakarta' },
  { id: 3, komoditas: 'ikan tawar', size: '20', kota: 'jakarta' },
  { id: 4, komoditas: 'ikan laut', size: '30', kota: 'bandung' },
  { id: 5, komoditas: 'teri', size: '32', kota: 'medan' },
  { id: 6, komoditas: 'ikan laut', size: '34', kota: 'jogja' },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getData();

    const newData = Array.from(new Set(data.map(i => i.id)))
      .filter(i => i)
      .map(i => data.find(item => item.id === i));

    await setData(newData);
  }

  console.log(data)

  return (
    <Grid container justify='center'>
      <Header search={search} setSearch={setSearch} />
      <List list={data} onClickCard={(item) => console.log(item)} />
    </Grid>
  );
}

export default Home;
