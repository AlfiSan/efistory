import * as React from 'react';
import {
  Box,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import './styles.scss';
import colors from '../../themes/colors';

const ModalFilter = ({
  isVisible,
  handleClose,
  sizes,
  cities,
  size,
  city,
  setCity,
  setSize,
  handleFilter,
  handleReset,
}) => {
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };

  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className='modal-container'>
      <Modal
        open={isVisible}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        
      >
        <Box sx={styles.box}>
          <h2>Filter</h2>
          <br/>
          <p>Pilih Lokasi</p>
          <FormControl fullWidth>
            <InputLabel id='city-label'>Kota</InputLabel>
            <Select
              labelId='city-label'
              id='city-select'
              placeholder='Pilih Lokasi'
              value={city}
              label='Kota'
              onChange={handleChangeCity}
            >
              {cities &&
                cities.length > 0 &&
                cities.map((item, key) => (
                  <MenuItem value={item?.value}>{item?.label}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <br/><br/>
          <p>Pilih Ukuran</p>
          <FormControl fullWidth>
            <InputLabel id='size-label'>Ukuran</InputLabel>
            <Select
              labelId='size-label'
              id='size-select'
              placeholder='Pilih Ukuran'
              height={'80%'}
              value={size}
              label='Ukuran'
              onChange={handleChangeSize}
            >
              {sizes &&
                sizes.length > 0 &&
                sizes.map((item, key) => (
                  <MenuItem value={item?.size}>{item?.size}</MenuItem>
                ))}
            </Select>
          </FormControl>
          <Box sx={styles.footer}>
            <Button
              variant='outlined'
              sx={styles.buttonReset}
              color='success'
              onClick={() => handleReset()}
            >
              Atur Ulang
            </Button>
            <Button
              variant='contained'
              sx={styles.buttonYes}
              color='success'
              onClick={() => handleFilter()}
              disabled={!city && !size}
            >
              Terapkan
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

const styles = {
  box: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '55%',
    bgcolor: colors.white,
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    paddingTop: 10,
    width: '80%',
    right: 32,
    bottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReset: {
    borderColor: colors.green,
    marginRight: 5,
    width: '40%',
    p: 1.5,
  },
  buttonYes: {
    backgroundColor: colors.green,
    width: '40%',
    p: 2,
  },
};

export default ModalFilter;
