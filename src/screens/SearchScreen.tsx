import React from 'react';
import styled from 'styled-components/native';

import SearchHeader from '../components/SearchHeader';
import SearchInput from '../components/SearchInput';
import MarketList from '../components/MarketList';


const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const HeaderContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  height: 105px;
  width: 100%;
`

const MarketsContainer = styled.View`
  width: 345px;
  height: 582px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  border-radius: 8px;
  margin-top: 26px;
  margin-left: 15px;
`


const Search: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
        <SearchHeader />
        <SearchInput />
      </HeaderContainer>
      <MarketsContainer>
        <MarketList />
      </MarketsContainer>
    </Container>
  );
}

export default Search;