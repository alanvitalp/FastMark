import React, { useState } from 'react';
import theme from '../../../styles/theme';

import { 
   Container,
   Card, 
   ProductPrice, 
   Value, 
   Discount, 
   Market, 
   Details,
   ProductTitle, ProductImage} from './styles';


const Products: React.FC<any> = ({ Title, Price, ImageUrl, onPress }:any) => {
  function getRandomArbitrary(min: number, max: number){
    return (Math.random() * (max - min) + min)
  }

  return (
    <Container>
      <Card onPress={onPress}> 
        <Details>
          <ProductTitle>{Title}</ProductTitle>
          <ProductPrice>
            <Value>{Price},00</Value>
          </ProductPrice>
        </Details>
        <ProductImage style={{ resizeMode: 'contain', zIndex: 0, position: 'absolute', width: 330, height: 150, top: 20 }} source={ {uri: ImageUrl}} />
      </Card>
    </Container>
  );
}

export default Products;