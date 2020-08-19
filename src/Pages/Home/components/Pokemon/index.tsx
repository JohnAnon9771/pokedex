import React, { useEffect, memo } from 'react';

import { PokemonDetailsProps } from '../../types';

interface PokemonComponentProps {
  details: PokemonDetailsProps | undefined;
}

const Pokemon: React.FC<PokemonComponentProps> = ({
  details,
}: PokemonComponentProps) => {
  useEffect(() => console.log('render pokemon'));
  return (
    <>
      <h1>{details?.name}</h1>
      <img
        src={details?.sprites?.other['official-artwork'].front_default}
        alt=""
        srcSet=""
      />
    </>
  );
};

export default memo(Pokemon);
