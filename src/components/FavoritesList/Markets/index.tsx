import React from 'react';

import { Container, MarketTitle, MarketImage } from './styles';

import { RouteProp } from '@react-navigation/native';

type MarketsProps = {
  restaurant: {
    id: number;
    img: string;
    name: string;
  }
  navigation: any;

}

const Markets: React.FC<MarketsProps> = ( { restaurant: {  id, img, name  }, navigation } ) => {

  const toMarket = () => {
    navigation.navigate("Market", { id, img, name });
  }

  return (
  <Container onPress={toMarket}>
    <MarketImage source={{ uri: img }}/>
    <MarketTitle>{name}</MarketTitle>
  </Container>
  );
}

export default Markets;