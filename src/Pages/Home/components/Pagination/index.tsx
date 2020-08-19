import React, { useEffect } from 'react';

interface PaginationComponentProps {
  count: number | undefined;
}

const Pagination: React.FC<PaginationComponentProps> = ({
  count,
}: PaginationComponentProps) => {
  useEffect(() => console.log('render pagination'));

  return <h1>Pagination</h1>;
};

export default Pagination;
