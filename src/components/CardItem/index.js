import React from 'react';
import CardImage from '../../assets/placeholder-img.png';
import { FormatRupiah } from '../../utils/currency';
import { capitalize } from 'lodash';
import './styles.scss';

const CardItem = ({ item, onClick }) => {
  return (
    <div
      className='container'
      onClick={() => {
        onClick(item.id);
      }}
    >
      <div className='content'>
        <img src={CardImage} alt={item.name} height='120px' width='120px' />
      </div>
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
      <div className='footer-desc '>
        <p>
          {`${(item?.areaKota && capitalize(item?.areaKota)) || ''}` ||
            'jakarta'}
        </p>
      </div>
    </div>
  );
};

export default CardItem;
