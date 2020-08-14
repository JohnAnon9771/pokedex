import React from 'react';

import Pagination from './components/Pagination';
import Pokemon from './components/Pokemon';

import { useFetchPokemon } from '../../hooks/useFetchPokemon';
import { Container } from './styles';
import { PokemonDataProps } from './types';

interface HomeProps {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Home: React.FC<HomeProps> = ({ offset, setOffset }: HomeProps) => {
  const { data } = useFetchPokemon<PokemonDataProps>(
    `pokemon?offset=${offset}`,
    {
      params: { limit: 1 },
    },
  );

  if (!data) return <p>Carregando...</p>;

  return (
    <Container>
      <Pokemon url={data.results[0].url} />
      <Pagination count={data?.count} />
      <button type="button" onClick={() => setOffset((state) => state + 1)}>
        Proximo
      </button>
      <p>{String(offset)}</p>
      <button type="button" onClick={() => setOffset((state) => state - 1)}>
        Anterior
      </button>
    </Container>
  );
};

export default Home;
