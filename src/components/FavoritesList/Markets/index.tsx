import React from 'react';

import { Container, MarketTitle, MarketImage } from './styles';

type RestaurantProps = {
  restaurant: {
    id: number;
    img: string;
    name: string;
    onPress: () => void;
  }
}

const Restaurants: React.FC<RestaurantProps> = ( { restaurant: { id, img, name, onPress } } ) => {
  return (
  <Container onPress={onPress}>
    <MarketImage source={{ uri: img }}/>
    <MarketTitle>{name}</MarketTitle>
  </Container>
  );
}

export default Restaurants;