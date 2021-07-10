import React, { useState } from 'react';
import styled from 'styled-components/native';

import SearchHeader from '../components/SearchHeader';
import SearchInput from '../components/SearchInput';
import MarketList from '../components/MarketList';


const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const HeaderContainer = styled.View`
  background: ${({ theme }) => theme.colors.white};
  height: 105px;
  width: 100%;
`

const MarketsContainer = styled.View`
  width: 345px;
  height: 582px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  border-radius: 8px;
  margin-top: 26px;
  margin-bottom: 20px;
  margin-left: 15px;
`
type SearchProps = {
  navigation: any;
}


const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [markets, setMarkets] = useState([
    {
     id: 1,
     name: "atacadao",
     image: require('../../assets/images/SupermercadosPesquisar/atacadao.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     image: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     image: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     image: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     image: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     image: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     image: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     image: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     image: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     image: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     image: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     image: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     image: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     image: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     image: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     image: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     image: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     image: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     image: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     image: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     image: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     image: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     image: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     image: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     image: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     image: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     image: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     image: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     image: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     image: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     image: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     image: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     image: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     image: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     image: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     image: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     image: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     image: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     image: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     image: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     image: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     image: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     image: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     image: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     image: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     image: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    }
  ]);

  const handleGoBack = () => {
    navigation.goBack();
  }
  
  return (
    <Container>
      <HeaderContainer>
        <SearchHeader handleGoBack={handleGoBack}/>
        <SearchInput />
      </HeaderContainer>
      <MarketsContainer>
        <MarketList markets={markets}/>
      </MarketsContainer>
    </Container>
  );
}

export default Search;