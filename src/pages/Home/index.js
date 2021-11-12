import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { List, Header, EmptyView } from '../../components';
import { getData } from '../../helpers/actions';
import './styles.scss';

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
      {!loading && data.length === 0 && (
        <EmptyView
          title='Data tidak ditemukan'
          desc='Data yang anda inginkan tidak ada atau belum tersedia saat ini'
        />
      )}
      <List
        list={data}
        loading={loading}
        onClickCard={(item) => console.log(item)}
      />
    </Grid>
  );
};

export default Home;
