import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import Favorites from '../components/FavoritesList';
import BestPrices from '../components/BestPrices';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const Home: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Favorites />
      <BestPrices/>
    </Container>
  );
}

export default Home;