import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import Favorites from '../components/FavoritesList';
import BestPrices from '../components/BestPrices';
import TabBar from '../components/TabBar';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container theme={theme}>
      <Header/>
      <Favorites />
      <BestPrices/>
      <TabBar/>
    </Container>
  );
}

export default Home;