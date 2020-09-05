import React, { useEffect } from 'react';

import { Container, Header, Main } from './styles';

const Pokemon: React.FC<PokemonComponentProps> = ({
  pokemon,
}: PokemonComponentProps) => {
  useEffect(() => console.log('render pokemon'));

  return (
    <Container>
      <Header>
        <p>#{pokemon?.id}</p>
        <h1>{pokemon?.name}</h1>
      </Header>
      <Main>
        <img
          src={
            pokemon?.details?.sprites?.other['official-artwork'].front_default
          }
          alt=""
          srcSet=""
        />
      </Main>
      <p>{pokemon?.names[0].name}</p>
    </Container>
  );
};

export default Pokemon;
