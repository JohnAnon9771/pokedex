interface Data {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}

interface DataPokemon {
  id: number;
  name: string;
  names: {
    name: string;
  }[];
  details: {
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  };
  pokemonData: {
    count: number;
  };
}
