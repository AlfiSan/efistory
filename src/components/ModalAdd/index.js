import * as React from 'react';
import { Box, Modal } from '@mui/material';
import './styles.scss';
import colors from '../../themes/colors';
import JsonToForm from 'json-reactform';
import modelAddForm from '../../model/addModel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalAdd = ({ isVisible, handleClose, handleSubmit }) => {
  const handleOnSubmit = (e) => {
    handleSubmit(e)
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
          <h2>Tambah Data Baru</h2>
          <br />
          <JsonToForm model={modelAddForm} onSubmit={handleOnSubmit} />
        </Box>
      </Modal>
    </div>
  );
};

const styles = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: '80%',
    bgcolor: colors.white,
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
  },
  footer: {
    flex: 1,
    margin: 0,
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    top: 'auto',
    left: 100,
    right: 100,
    bottom: '8%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonYes: {
    backgroundColor: colors.green,
    width: '50%',
    p: 2,
  },
};

export default ModalAdd;
