import React from 'react';
import CardImage from '../../assets/placeholder-img.png';
import Skeleton from '@mui/material/Skeleton';
import { FormatRupiah } from '../../utils/currency';
import { capitalize } from 'lodash';
import './styles.scss';

const CardItem = ({ item, onClick, loading }) => {
  return (
    <div
      className='container'
      onClick={() => {
        onClick(item.id);
      }}
    >
      {loading ? (
        <Skeleton
          animation='wave'
          variant='rectangular'
          width={'100%'}
          height={120}
          style={{ marginBottom: 6 }}
        />
      ) : (
        <div className='content'>
          <img src={CardImage} alt={item.name} height='120px' width='120px' />
        </div>
      )}
      {loading ? (
        <Skeleton
          animation='wave'
          variant='text'
          width={'100%'}
          height={20}
          style={{ marginBottom: 6 }}
        />
      ) : (
        <div className='desc'>
          <p>
            <b>Komoditas : </b>
            {item?.komoditas || ''}
          </p>

          <p>
            <b>Ukuran : </b>
            {item?.size || 0}
          </p>

          <p>
            <b>Harga : </b>
            {item?.price ? FormatRupiah(item?.price, 'Rp ') : ''}
          </p>
        </div>
      )}
      {loading ? (
        <Skeleton
          animation='wave'
          variant='rectangular'
          width={'100%'}
          height={40}
        />
      ) : (
        <div className='footer-desc '>
          <p>
            {`${(item?.areaKota && capitalize(item?.areaKota)) || ''}` ||
              'jakarta'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CardItem;
