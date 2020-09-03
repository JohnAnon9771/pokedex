import React, { useEffect } from 'react';

import Pokemon from './components/Pokemon';

import { Container } from './styles';

const Home: React.FC = () => {
  useEffect(() => console.log('render home'));
  return (
    <Container>
      <Pokemon />
    </Container>
  );
};

export default Home;
