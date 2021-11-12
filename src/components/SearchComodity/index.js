import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Stack, Autocomplete } from '@mui/material/';
import { ConstAutoCompleteSearch } from '../../constanta/ConstAutoCompleteSearch';

const SearchComodity = ({ search, setSearch, onSearch }) => {
  const handleChange = async (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  const handleClickTag = async (event) => {
    setSearch(event.target.textContent);
    onSearch(event.target.textContent);
  };

  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        freeSolo
        id='search komoditas'
        disableClearable
        options={ConstAutoCompleteSearch.map((name) => name)}
        onChange={handleClickTag}
        onInputChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Cari komoditas'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
};

export default SearchComodity;
