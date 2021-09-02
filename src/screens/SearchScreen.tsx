import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import SearchHeader from '../components/SearchHeader';
import SearchInput from '../components/SearchInput';
import MarketList from '../components/MarketList';

import { getMarkets } from '../services/marketServices'


const Container = styled.View`
  flex: 1;
  align-items: center;
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
  margin-top: 40px;
`
type SearchProps = {
  navigation: any;
}

type marketType = {
  id: number
  name: string;
  img: any
}



const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [markets, setMarkets] = useState<marketType[]>([]);

  useEffect(() => {
    setMarkets(getMarkets());
  })

  const handleGoBack = () => {
    navigation.goBack();
  }
  
  return (
    <Container>
      <HeaderContainer>
        <SearchHeader handleGoBack={handleGoBack}/>
        <SearchInput />
      </HeaderContainer>
      <MarketsContainer>
        <MarketList nav={navigation} markets={markets}/>
      </MarketsContainer>
    </Container>
  );
}

export default Search;