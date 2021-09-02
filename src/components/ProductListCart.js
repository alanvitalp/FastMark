import React, {useContext, useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ProductCart } from '../components/ProductCart.js';
import { getProducts } from '../services/productsServices';
import { CartContext } from '../contexts/CartContext'


export function ProductsListCart ({navigation}) {
  const { items } = useContext(CartContext);

  function renderProduct({item: product}) {  
      return (
        <ProductCart {...product.product} 
        />
      );
  }

  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={items}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsListContainer: {
    // backgroundColor: '#FFC301',
    // paddingHorizontal: 24,
    // paddingVertical: 24,
    // marginHorizontal: 16,
  },
});