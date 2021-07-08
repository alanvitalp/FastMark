import React, { useState } from 'react';
import theme from '../../../styles/theme';

import { 
   Container,
   Card, 
   ProductPrice, 
   ProductTitle, 
   Price, 
   Discount, 
   Market, 
   ProductImage, 
   Details} from './styles';


type ProductProps = {
    id: number;
    name: string;
    market: string;
    discount: string;
    price: string;
    image: string;
} 

const Products: React.FC<ProductProps> = ({ name, market, discount, price, image }) => {

  return (
    <Container>
      <Card url={image}>
        <Details>
          <ProductTitle>{name}</ProductTitle>
          <Market>{market}</Market>
          <ProductPrice>
            <Discount>{discount}</Discount>
            <Price>{price}</Price>
          </ProductPrice>
        </Details>
      </Card>
    </Container>
  );
}

export default Products;