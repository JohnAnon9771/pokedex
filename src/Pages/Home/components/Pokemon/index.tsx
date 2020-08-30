import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { useFetchPokemon } from '../../../../hooks/useFetchPokemon';
import api from '../../../../services/api';
import Pagination from '../Pagination';
import { Container, Header, Main } from './styles';

const Pokemon: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [moreDetails, setMoreDetails] = useState<PokemonDetailsProps>();
  const { details, data } = useFetchPokemon(`pokemon?offset=${offset}`, {
    params: { limit: 1 },
  });

  // useEffect(() => {
  //   const { CancelToken } = axios;
  //   const source = CancelToken.source();
  //   async function getMoreDetails() {
  //     const response = await api.get(`pokemon-species/${details?.name}`, {
  //       cancelToken: source.token,
  //     });
  //     setMoreDetails(response.data);
  //   }
  //   getMoreDetails();
  //   return () => source.cancel();
  // }, [details]);

  useEffect(() => console.log('render Pokemon'));

  return (
    <>
      <Pagination count={data?.count} {...{ setOffset }} />
      <Container>
        <Header>
          <p>#{details?.id}</p>
          <h1>{details?.name}</h1>
        </Header>
        <Main>
          <img
            src={details?.sprites?.other['official-artwork'].front_default}
            alt=""
            srcSet=""
          />
        </Main>
      </Container>
    </>
  );
};

export default Pokemon;
