import React from 'react';
import { useState } from 'react';

import { Container, BestPricesTitle, SeeAll, SeeAllLabel } from './styles';

const BestPrices: React.FC = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Arroz Branco Tio João",
      market: "No mercado: Carnaúba Supermercado",
      discountPrice: 'R$ 3,49',
      price: 'R$ 4,00'
    },
    {
      id: 2,
      name: "",
      market: "No mercado: Carnaúba Supermercado",
      discountPrice: 'R$ 3,49',
      price: 'R$ 4,00'
    }
  ]);
  
  return (
    <Container>
      <BestPricesTitle>Melhores preços hoje</BestPricesTitle>
      <SeeAll><SeeAllLabel>Ver todos</SeeAllLabel></SeeAll>
      {}
    </Container>
  );
}

export default BestPrices;