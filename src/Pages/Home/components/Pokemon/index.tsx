import React, { useState, useEffect } from 'react';

import { useFetchPokemon } from '../../../../hooks/useFetchPokemon';
import Pagination from '../Pagination';
import { Container, Header, Main } from './styles';

const Pokemon: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data } = useFetchPokemon(`pokemon?offset=${offset}`, {
    params: { limit: 1 },
  });

  useEffect(() => console.log('render pokemon'));

  return (
    <>
      <Pagination count={data?.pokemonData.count} {...{ setOffset }} />
      <Container>
        <Header>
          <p>#{data?.id}</p>
          <h1>{data?.name}</h1>
        </Header>
        <Main>
          <img
            src={
              data?.details?.sprites?.other['official-artwork'].front_default
            }
            alt=""
            srcSet=""
          />
        </Main>
        <p>{data?.names[0].name}</p>
      </Container>
    </>
  );
};

export default Pokemon;
