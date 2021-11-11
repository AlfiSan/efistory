import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { ConstAutoCompleteSearch } from '../../constanta/ConstAutoCompleteSearch';

const SearchComodity = ({search, setSearch, onSearch}) => {

  const handleChange = async (event) => {
    setSearch(event.target.value);
    onSearch(event.target.value)
  };

  return (
    <Stack spacing={2} sx={{ width: 400 }}>
      <Autocomplete
        freeSolo
        id="search komoditas"
        disableClearable
        options={ConstAutoCompleteSearch.map((name) => name)}
        renderInput={(params) => (
          <TextField
          {...params}
          onChange={handleChange}
          value={search}
          label="Cari komoditas"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
          />
        )}
      />
    </Stack>
  );
}

export default SearchComodity