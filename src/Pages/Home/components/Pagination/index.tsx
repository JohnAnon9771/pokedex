import React, { memo, useEffect } from 'react';

const Pagination: React.FC<PaginationComponentProps> = ({
  count,
  setOffset,
}: PaginationComponentProps) => {
  useEffect(() => console.log('render pagination', count));

  return (
    <>
      <button type="button" onClick={() => setOffset((state) => state - 1)}>
        Ant
      </button>
      <button type="button" onClick={() => setOffset((state) => state + 1)}>
        Prox
      </button>
    </>
  );
};
export default memo(Pagination);
