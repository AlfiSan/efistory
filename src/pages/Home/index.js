import React, { useState, useEffect } from 'react';
import { Grid, Fab, Snackbar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
  List,
  Header,
  EmptyView,
  ModalFilter,
  ModalAdd,
} from '../../components';
import { getData, addData } from '../../helpers/actions';
import { useGetCity, useGetSize } from '../../hooks';

import './styles.scss';

const Home = () => {
  const { fetchGetCities, cities } = useGetCity();
  const { fetchGetSizes, sizes } = useGetSize();

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModalFilter, setShowModalFilter] = useState(false);
  const [city, setCity] = useState('');
  const [size, setSize] = useState('');
  const [hasFilter, setHasFilter] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

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
    handleFilterReset(false);
    if (value.length > 0) {
      fetchData({ search: { komoditas: value } });
    } else {
      fetchData();
    }
  };

  const openModalFilter = async () => {
    setShowModalFilter(true);
    await fetchGetCities();
    await fetchGetSizes();
  };

  const openModalAdd = async () => {
    setSearch('')
    setShowModalAdd(true);
  };

  const closeModalFilter = () => {
    setShowModalFilter(false);
  };

  const closeModalAdd = () => {
    setShowModalAdd(false);
  };

  const handleFilter = async () => {
    let data = {};

    if (city) {
      data = { ...data, area_kota: city };
    }

    if (size) {
      data = { ...data, size };
    }

    fetchData({ search: data });
    closeModalFilter();
    setHasFilter(true);
  };

  const handleFilterReset = () => {
    setSize('');
    setCity('');
    if (hasFilter) {
      setHasFilter(false);
      fetchData();
    }
  };

  const postAddData = async (params) => {
    try {
      const response = await addData(params);
      if (response?.data.error) {
        setShowSnackbar(true);
      }
    } catch (e) {
      console.log('error: ', e);
      setShowSnackbar(true);
    }
  };

  const handleSubmitAdd = async (params) => {
    let postData = [];
    let data = {
      komoditas: params?.Komoditas,
      price: params?.Harga,
      area_provinsi: params?.Provinsi?.value,
      area_kota: params?.Kota?.value,
      size: params?.Ukuran?.value,
      tgl_parsed: params?.Tanggal,
    };

    postData.push(data);

    await postAddData(postData);

    closeModalAdd();
    await fetchData();
  };

  return (
    <Grid container justify='center'>
      <Header
        search={search}
        setSearch={setSearch}
        onSearch={onSubmitSearch}
        showModalFilter={showModalFilter}
        openModalFilter={openModalFilter}
        hasFilter={hasFilter}
      />
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
      <ModalFilter
        isVisible={showModalFilter}
        handleClose={closeModalFilter}
        sizes={sizes}
        cities={cities}
        city={city}
        setCity={setCity}
        size={size}
        setSize={setSize}
        handleFilter={handleFilter}
        handleReset={handleFilterReset}
      />
      <ModalAdd
        isVisible={showModalAdd}
        handleClose={closeModalAdd}
        handleSubmit={handleSubmitAdd}
      />
      <Fab
        color='secondary'
        aria-label='add'
        sx={fabStyle}
        onClick={() => openModalAdd()}
      >
        <AddIcon />
      </Fab>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
        message='Terjadi kesalahan pada server'
      />
    </Grid>
  );
};

const fabStyle = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

export default Home;
