interface PaginationComponentProps {
  count: number | undefined;
  setOffset: React.Dispatch<SetStateAction<number>>;
}
