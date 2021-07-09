import React, { useState } from 'react';

import { FlatList } from 'react-native';

import { Container, BestPricesTitle, SeeAll, SeeAllLabel, LabelContainer } from './styles';

import Products from './Products';

const BestPrices: React.FC = () => {
  const [products, setProducts] = useState<any>([
    {
      id: 1,
      name: "Arroz Branco Tio João",
      market: "No mercado: Carnaúba Supermercado",
      img: "https://s3-sa-east-1.amazonaws.com/loja2/69b96a2c31e396f69315d3e872616d96.png",
      discountPrice: 'R$ 3,49',
      price: 'R$ 4,00'
    },
    {
      id: 2,
      name: "Sal rosa",
      market: "No mercado: Carnaúba Supermercado",
      img: require("../../../assets/images/sal-rosa.png"),
      discountPrice: 'R$ 3,49',
      price: 'R$ 4,00'
    },
    {
      id: 3,
      name: 'Sal qualitá',
      market: "No mercado: Carnaúba Supermercado",
      img: require("../../../assets/images/Sal-qualita.png"),
      discountPrice: '3,49',
      price: 'R$ 4,00',
    }
  ]);


  const renderItem = ({ item }: any ) => (
    <Products
      id={item.id}
      name={item.name}
      market={item.market} 
      image={item.img}
      discount={item.discountPrice}
      price={item.price}
    />
  );

  return (
    <Container>
      <LabelContainer>
        <BestPricesTitle>Melhores preços hoje</BestPricesTitle>
        <SeeAll><SeeAllLabel>Ver todos</SeeAllLabel></SeeAll>
      </LabelContainer>
      <FlatList
        data={products}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

export default BestPrices;