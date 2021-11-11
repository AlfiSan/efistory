import React from 'react';
import SearchComodity from '../SearchComodity';
import './styles.scss';

const Header = (props) => {
  const { search, setSearch, onSearch } = props;

  return (
    <div className='header'>
      <SearchComodity
        search={search}
        setSearch={setSearch}
        onSearch={onSearch}
      />
    </div>
  );
};

export default Header;
