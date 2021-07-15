import React from 'react';
import { useState } from 'react';

import { Container } from './styles';

import Markets from './Markets'
import { FlatList } from 'react-native-gesture-handler';

type FavoritesProps = {
  favorites: Array<{}>;
  nav: () => void;
}
const Favorites: React.FC<FavoritesProps> = ({ nav, favorites }) => {


  const renderItem = ({ item }: any ) => (
    <Markets
      restaurant={item}
      navigation={nav}
    />
  );

  return (
    <FlatList
      data={favorites}
      numColumns={4}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
}

export default Favorites;