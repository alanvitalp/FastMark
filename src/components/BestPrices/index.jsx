import React, { useEffect, useState } from 'react';

import { FlatList } from 'react-native';

import { Container, BestPricesTitle, SeeAll, SeeAllLabel, LabelContainer } from './styles';

import Products from './Products';
import { getProducts } from '../../services/productsServices';
import { Product } from '../Product';


const BestPrices = ({ nav }) => {
  function renderProduct({item: product}) {
    return (
      <Products {...product} 
      onPress={() => {
        nav.navigate('ProductDetails', {
          productId: product.Id,
        });
      }}
      />
    );
  }
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

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
        data={products.slice(0, 6)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderProduct}
        keyExtractor={item => item.Id.toString()}
      />
    </Container>
  );
}

export default BestPrices;