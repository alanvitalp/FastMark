import React, { useState } from 'react';
import styled from 'styled-components/native';

import SearchHeader from '../components/SearchHeader';
import SearchInput from '../components/SearchInput';
import MarketList from '../components/MarketList';


const Container = styled.View`
  flex: 1;
  align-items: center;
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
  margin-top: 40px;
`
type SearchProps = {
  navigation: any;
}


const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [markets, setMarkets] = useState([
    {
     id: 1,
     name: "atacadao",
     img: require('../../assets/images/SupermercadosPesquisar/atacadao.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     img: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     img: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     img: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     img: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     img: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     img: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     img: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     img: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     img: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     img: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     img: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     img: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     img: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     img: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     img: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     img: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     img: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     img: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     img: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     img: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     img: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     img: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     img: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     img: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     img: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     img: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     img: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     img: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     img: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     img: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     img: require('../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     img: require('../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     img: require('../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     img: require('../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     img: require('../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     img: require('../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     img: require('../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     img: require('../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     img: require('../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     img: require('../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     img: require('../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     img: require('../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     img: require('../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     img: require('../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     img: require('../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
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
        <MarketList nav={navigation} markets={markets}/>
      </MarketsContainer>
    </Container>
  );
}

export default Search;