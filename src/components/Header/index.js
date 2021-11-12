/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SearchComodity from '../SearchComodity';
import { FilterAltOutlined, FilterAlt } from '@mui/icons-material';
import colors from '../../themes/colors';
import './styles.scss';

const Header = (props) => {
  const { search, setSearch, onSearch, openModalFilter, hasFilter } = props;

  return (
    <div className='header'>
      <div className='search'>
        <SearchComodity
          search={search}
          setSearch={setSearch}
          onSearch={onSearch}
        />
      </div>
      <div className='filter'>
        <a onClickCapture={() => openModalFilter()}>
          {hasFilter ? (
            <FilterAlt fontSize='large' sx={{color: colors.green}} />
          ) : (
            <FilterAltOutlined fontSize='large' />
          )}
        </a>
      </div>
    </div>
  );
};

export default Header;
