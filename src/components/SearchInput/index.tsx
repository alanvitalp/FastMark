import React from 'react';

import { Container, FilterInput, SearchIcon } from './styles';

const SearchInput: React.FC = () => {
  return (
    <Container>
      <FilterInput placeholder="Buscar restaurante" />
      <SearchIcon name="search1" size={26} color="#C5C5C5" />
    </Container>
  );
}

export default SearchInput;