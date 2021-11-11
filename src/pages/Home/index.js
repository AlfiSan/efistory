import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import List from '../../components/List';
import Header from '../../components/Header';
import { getData } from '../../helpers/actions';

const Home = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (params = null) => {
    try {
      setLoading(true);
      const data = await getData(params);

      if (data) {
        const newData = Array.from(new Set(data.map((i) => i.id)))
          .filter((i) => i)
          .map((i) => data.find((item) => item.id === i));

        await setData(newData);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSubmitSearch = (value) => {
    if (value.length > 0) {
      fetchData({ search: { komoditas: value } });
    } else {
      fetchData();
    }
  };

  return (
    <Grid container justify='center'>
      <Header search={search} setSearch={setSearch} onSearch={onSubmitSearch} />
      <List
        list={data}
        loading={loading}
        onClickCard={(item) => console.log(item)}
      />
    </Grid>
  );
};

export default Home;
