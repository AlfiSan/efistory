import React from 'react';
import SearchComodity from '../SearchComodity';
import { Filter } from '@mui/icons-material';

import './styles.scss';

const Header = (props) => {
  const { search, setSearch, onSearch } = props;

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
        <Filter />
      </div> 
    </div>
  );
};

export default Header;
