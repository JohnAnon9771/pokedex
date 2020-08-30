import React, { useEffect } from 'react';

import Pokemon from './components/Pokemon';

import { Container } from './styles';

const Home: React.FC = () => {
  useEffect(() => console.log('home'));

  return (
    <Container>
      <Pokemon />
    </Container>
  );
};

export default Home;
