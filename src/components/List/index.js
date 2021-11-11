import React from 'react';
import Grid from '@mui/material/Grid';
import CardItem from '../CardItem';

const List = (props) => {
  const { list, onClickCard } = props;

  return (
    <Grid
      container
      justify='center'
      sx={{p: 2}}
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {list &&
        list.map((item) => (
          <Grid container item xs={2} sm={4} md={3}>
            <CardItem item={item} onClick={onClickCard} />
          </Grid>
        ))}
    </Grid>
  );
};

export default List;
