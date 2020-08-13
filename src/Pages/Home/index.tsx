import React, { useState, useEffect } from 'react';

import Pagination from './components/Pagination';

import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { Container } from './styles';
import { PokemonDataProps } from './types';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { data } = useFetchPokemon<PokemonDataProps>(
    `pokemon?offset=${offset}`,
    {
      params: { limit: 1 },
    },
  );

  if (!data) return <p>Carregando...</p>;

  return (
    <Container>
      {/* <Pokemon data={data} /> */}
      <Pagination count={data?.count} />
      <button type="button" onClick={() => setOffset((state) => state + 1)}>
        Page {String(offset)}
      </button>
    </Container>
  );
};

export default Home;
