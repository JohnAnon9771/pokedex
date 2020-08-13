import React from 'react';

interface PaginationComponentProps {
  count: number;
}

const Pagination: React.FC<PaginationComponentProps> = ({
  count,
}: PaginationComponentProps) => <h1>Pagination</h1>;

export default Pagination;
