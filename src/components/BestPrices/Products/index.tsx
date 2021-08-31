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



const Products: React.FC<any> = ({ product: { Title, market, Price, ImageUrl, Category } }:any) => {
  function getRandomArbitrary(min: number, max: number){
    return (Math.random() * (max - min) + min)
  }

  return (
    <Container>
      <Card>
        <Details>
          <ProductTitle>{Title}</ProductTitle>
          <ProductTitle>{Category}</ProductTitle>
          <Market>{market}</Market>
          <ProductPrice>
            <Value>{Price},00</Value>
          </ProductPrice>
        </Details>
      </Card>
      <ProductImage style={{ resizeMode: 'contain', zIndex: 0, position: 'absolute', width: 330, height: 150, top: 20 }} source={ {uri: ImageUrl}} />
    </Container>
  );
}

export default Products;