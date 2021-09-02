import React, { useState } from 'react';

import { FlatList } from 'react-native';

import { Container, BestPricesTitle, SeeAll, SeeAllLabel, LabelContainer } from './styles';

import Products from './Products';

type BestPricesProps = {
  products: any;
  nav: any;
}

const BestPrices: React.FC<BestPricesProps> = ({ products, nav }) => {
  const renderItem = ({ item }: any ) => (
    <Products
      product={item}
    />
  );

  const handleToProduct = () => {
    nav.navigate('Products'); 
  }
  return (
    <Container>
      <LabelContainer>
        <BestPricesTitle>Melhores preços hoje</BestPricesTitle>
        <SeeAll onPress={handleToProduct}><SeeAllLabel>Ver todos</SeeAllLabel></SeeAll>
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