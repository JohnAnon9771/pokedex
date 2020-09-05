interface PaginationComponentProps {
  count: number | undefined;
  setOffset: React.Dispatch<SetStateAction<number>>;
}

interface PokemonComponentProps {
  pokemon: DataPokemon | undefined;
}
