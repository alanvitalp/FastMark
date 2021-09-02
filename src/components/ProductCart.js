import React, { useEffect, useState } from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext'

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

export function ProductCart({ Id, ImageUrl, Title, Price }) {
  const { getItems, addItemToCart, removeItemFromCart, removeFromCart  } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItemFromCart(Id);
  }

  const handleAddItem= () => {
    addItemToCart(Id);
  }

  const handleRemove = () => {
    removeFromCart(Id);
  }

  return (
    <View style={styles.card}>
      <Image
        style={styles.thumb}
        source={{ uri: ImageUrl }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{Title}</Text>
        <Text style={styles.price}>$ {Price}</Text>
        <View style={styles.AddItem}>
          <TouchableOpacity onPress={handleRemoveItem} style={styles.MinusButton}><AntDesign name="minus" size={24} color="white" /></TouchableOpacity>
          <View style={styles.Counter}><Text >{getItems(Id)}</Text></View>
          <TouchableOpacity onPress={handleAddItem} style={styles.Addbutton}><AntDesign name="plus" size={24} color="white" /></TouchableOpacity>
          <TouchableOpacity onPress={handleRemove}><Ionicons name="trash-bin" style={{ marginLeft: 16 }} size={26} color="black" /></TouchableOpacity>
      </View>
  
      </View>

    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: '100%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between'
  },
  thumb: {
    height: 112,
    borderRadius: 16,
    width: 120,
  },
  infoContainer: {
    padding: 16,
    marginLeft: 54,
  
  },
  name: {
    fontSize: 22,
    maxWidth: 140,
    color: 'white',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginVertical: 6,
  },
  AddItem: {
    flexDirection: 'row',
    width: 100,
    height: 33,
    borderRadius: 4,
    marginTop: 8,
    alignItems: 'center',
  },
  MinusButton: {
    height: '100%',
    backgroundColor: '#C70039',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddText: {
    color: 'white',
    fontSize: 48,
  },
  Addbutton: {
    height: '100%',
    backgroundColor: '#FF5733',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Counter: {
    height: '100%',
    backgroundColor: 'white',
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
});