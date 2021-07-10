import React, { useState } from 'react';
import theme from '../../../styles/theme';

import { 
   Container,
   Card, 
   ProductPrice, 
   Price, 
   Discount, 
   Market, 
   Details,
   ProductTitle} from './styles';


type ProductProps = {
  product: {
    id: number;
    name: string;
    market: string;
    discountPrice: string;
    price: string;
    img: string;
    onPress: () => void;
  }
} 

const Products: React.FC<ProductProps> = ({ product: { id, name, market, discountPrice, price, img } }) => {

  return (
    <Container>
      <Card url={img}>
        <Details>
          <ProductTitle>{name}</ProductTitle>
          <Market>{market}</Market>
          <ProductPrice>
            <Discount>{discountPrice}</Discount>
            <Price>{price}</Price>
          </ProductPrice>
        </Details>
      </Card>
    </Container>
  );
}

export default Products;