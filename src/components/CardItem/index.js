import React from 'react';
import './styles.scss';
import CardImage from '../../assets/placeholder-img.png'

const CardItem = (item, onClick) => {
  return (
    <div
      className='container'
      onClick={() => {
        onClick(item.name);
      }}
    >
      <div className='content'>
        <img
          src={CardImage}
          alt={item.name}
          height='120px'
          width='120px'
        />
      </div>
      <div className='desc'>
        <p>{`Komoditas : ${item?.komoditas || ''}` || 'ikan'}</p>
        <p>{`Ukuran : ${item?.size || 0}`|| '20'}</p>
        <p>{`Harga : ${item?.price || 0}`|| '20'}</p>
        <p>{`# ${item?.kota || ''}` || 'jakarta'}</p>
      </div>
    </div>
  );
};

export default CardItem;
