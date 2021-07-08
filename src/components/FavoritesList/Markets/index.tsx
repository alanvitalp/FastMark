import React from 'react';

import { Container, MarketTitle, MarketImage } from './styles';

type RestaurantProps = {
  key: number;
  restaurant: {
    img: string;
    name: string;
  }
}

const Restaurants: React.FC<RestaurantProps> = ( { restaurant: { img, name } } ) => {
  return (
  <Container>
    <MarketImage source={{ uri: img }}/>
    <MarketTitle>{name}</MarketTitle>
  </Container>
  );
}

export default Restaurants;