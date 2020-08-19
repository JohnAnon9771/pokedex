import React, { useState } from 'react';

import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';

import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { Container } from './styles';

interface HomeProps {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { details, data } = useFetchPokemon(`pokemon?offset=${offset}`, {
    params: { limit: 1 },
  });

  return (
    <Container>
      <Pokemon details={details} />
      <Pagination count={data?.count} />
    </Container>
  );
};

export default Home;
