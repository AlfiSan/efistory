import React from 'react';
import SearchComodity from '../SearchComodity';
import './styles.scss'

const Header = (props) => {
  const { search, setSearch } = props;

  return (
    <div className='header'>
      <SearchComodity search={search} setSearch={setSearch} />
    </div>
  );
};

export default Header;
