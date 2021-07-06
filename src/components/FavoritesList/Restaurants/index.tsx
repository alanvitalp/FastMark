import React from 'react';
import { Text } from 'react-native'

import { Container, RestaurantTitle, RestaurantImage } from './styles';

type RestaurantProps = {
  key: number;
  restaurant: {
    id: number;
    img: string;
    name: string;
  }
}

const Restaurants: React.FC<RestaurantProps> = ( { restaurant: { img, name } } ) => {
  return (
  <Container>
    <RestaurantImage source={{ uri: img }}/>
    <RestaurantTitle>{name}</RestaurantTitle>
  </Container>
  );
}

export default Restaurants;