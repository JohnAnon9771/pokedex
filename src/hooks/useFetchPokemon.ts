import useSWR from 'swr';

import api from '../services/api';

export function useFetchPokemon<Data = unknown, Error = unknown>(
  url: string,
  config?: { params: { limit: number } },
): { data: Data | undefined; error: Error | undefined } {
  const { data, error } = useSWR<Data, Error>(url, async (urlPoke: string) => {
    const response = await api.get(urlPoke, config);
    return response.data;
  });

  return { data, error };
}
