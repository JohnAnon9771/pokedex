export interface PokemonDataProps {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}
interface PokemonDetailsProps {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': string;
    };
  };
}
