import React, { useEffect, useState } from 'react';

import axios from 'axios';

import api from '../../../../services/api';
import { PokemonDetailsProps } from '../../types';

interface PokemonComponentProps {
  url: string;
}

const Pokemon: React.FC<PokemonComponentProps> = ({
  url,
}: PokemonComponentProps) => {
  const [details, setDetails] = useState<PokemonDetailsProps>();

  useEffect(() => {
    const { CancelToken } = axios;
    const source = CancelToken.source();
    async function getDetailsPokemon() {
      try {
        const response = await api.get(url, { cancelToken: source.token });
        setDetails(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('cancelled');
        } else {
          throw Error;
        }
      }
    }
    getDetailsPokemon();
    return () => source.cancel();
  }, [url]);

  return (
    <>
      <h1>{details?.name}</h1>
      <img
        src={details?.sprites.other['official-artwork'].front_default}
        alt=""
        srcSet=""
      />
    </>
  );
};

export default Pokemon;
