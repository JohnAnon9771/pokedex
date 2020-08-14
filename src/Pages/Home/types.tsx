export interface PokemonDataProps {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}
export interface PokemonDetailsProps {
  id: number;
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
