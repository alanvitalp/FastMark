import React, { useState } from 'react';

import { FlatList } from 'react-native';

import { Container, BestPricesTitle, SeeAll, SeeAllLabel, LabelContainer } from './styles';

import Products from './Products';

type BestPricesProps = {
  products: any;
}

const BestPrices: React.FC<BestPricesProps> = ({ products }) => {
  const renderItem = ({ item }: any ) => (
    <Products
      product={item}
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
        keyExtractor={item => item.Id.toString()}
      />
    </Container>
  );
}

export default BestPrices;