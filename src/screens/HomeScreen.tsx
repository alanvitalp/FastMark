import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import Favorites from '../components/FavoritesList';
import BestPrices from '../components/BestPrices';
import { useAuthProvider } from '../contexts/AuthProvider';
import { Text, View } from 'react-native';

import { getProducts } from '../services/productsServices' 

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

type HomeProps = {
  navigation: any;
};

type ProductType = {
  Id: string,
  Title: string,
  Category: string,
  SubCategory: string,
  Manufacturer: string,
  Contents: string,
  Description: string,
  Organic?: boolean,
  ImageUrl: string,
  OrgPrice: string,
  Price: string,
  IsNew?: boolean
}

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    return setProducts(getProducts());
  });

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      img: 'http://www.portaliep.com/images/Parceiros/carnauba-2016.png',
      name: 'Carnaúba',
    },
    {
      id: 2,
      img: 'data:image/png;base64,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',
      name: 'Center Box',
    },
    {
      id: 3,
      img: 'https://imagesapt.apontador-assets.com/fit-in/640x480/b53f114fec874b05a121a62a6f9a0e30/carrefour.jpg',
      name: 'Carrefour',
    },
    {
      id: 4,
      img: 'https://seeklogo.com/images/S/Supermercados_Mambo-logo-A45B8DF987-seeklogo.com.gif',
      name: 'Mambo',
    }
  ]);

  return (
    <Container>
      <Header/>
      <Favorites nav={navigation} favorites={favorites}/> 
      <BestPrices nav={navigation} products={products.slice(0, 5)}/>
    </Container>
);
}


export default Home