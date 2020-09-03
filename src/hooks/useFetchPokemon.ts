import { useEffect } from 'react';

import useSWR from 'swr';

import api from '../services/api';

export function useFetchPokemon<Error>(
  urlFetch: string,
  config?: { params: { limit: number } },
): {
  data: DataPokemon | undefined;
  error: Error | undefined;
} {
  const { data, error } = useSWR<DataPokemon, Error>(
    urlFetch,
    async (urlPoke: string) => {
      const { data: pokemonData } = await api.get<Data>(urlPoke, config);
      const response = await api.get(
        `pokemon-species/${pokemonData.results[0].name}`,
      );
      const details = await api.get(`pokemon/${pokemonData.results[0].name}`);

      return { ...response.data, pokemonData, details: details.data };
    },
  );

  useEffect(() => console.log('render fetch pokemon'));

  return { data, error };
}
