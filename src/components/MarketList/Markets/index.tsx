import React from 'react';

import { Container, MarketImage } from './styles';

type MarketProps = {
  markets: {
    id: number;
    img: string;
    name: string;
  };
  navigation: any;
}

const Markets: React.FC<MarketProps> = ( { markets: { id, img, name }, navigation } ) => {

  const handleNavigationToMarket = () => {
    navigation.navigate("Market", {id, img, name});
  }

  return (
    <Container onPress={handleNavigationToMarket}>
      <MarketImage source={img}/>
    </Container>
  );
}

export default Markets;