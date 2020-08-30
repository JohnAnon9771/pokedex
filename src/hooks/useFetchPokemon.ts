import { useEffect, useState } from 'react';

import Axios, { AxiosResponse } from 'axios';
import useSWR from 'swr';

import api from '../services/api';

export function useFetchPokemon<Error>(
  urlFetch: string,
  config?: { params: { limit: number } },
): {
  details: PokemonDetailsProps | undefined;
  data: PokemonDataProps | undefined;
  error: Error | undefined;
} {
  const [details, setDetails] = useState<PokemonDetailsProps>();

  const { data, error } = useSWR<PokemonDataProps, Error>(
    urlFetch,
    async (urlPoke: string) => {
      const response = await api.get(urlPoke, config);
      return response.data;
    },
  );

  useEffect(() => {
    const { CancelToken } = Axios;
    const source = CancelToken.source();
    async function getDetailsPokemon() {
      try {
        let response: AxiosResponse;
        if (data?.results) {
          const { url } = data?.results[0];
          response = await api.get<PokemonDetailsProps>(url, {
            cancelToken: source.token,
          });
        }
        setDetails(response?.data);
      } catch (err) {
        if (err) {
          console.log('cancelled');
        }
      }
    }
    getDetailsPokemon();
    console.log('fetch details');
    return () => source.cancel();
  }, [data]);

  useEffect(() => console.log('fetch pokemon', details));

  return { details, data, error };
}
