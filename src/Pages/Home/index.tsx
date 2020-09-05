import React, { useEffect, useState } from 'react';

import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';

import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { Container } from './styles';

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const { data } = useFetchPokemon(`pokemon?offset=${offset}`, {
    params: { limit: 1 },
  });

  useEffect(() => console.log('render home', data, offset));

  return (
    <Container>
      <Pagination count={data?.pokemonData.count} {...{ setOffset }} />
      <Pokemon pokemon={data} />
    </Container>
  );
};

export default Home;
