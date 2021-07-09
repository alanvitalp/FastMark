import React, { useState } from 'react';

import { Container } from './styles';

import Markets from './Markets/index'
import { FlatList } from 'react-native';

const MarketList: React.FC = () => {

  const [markets, setMarkets] = useState([
    {
     id: 1,
     name: "atacadao",
     image: require('../../../assets/images/SupermercadosPesquisar/atacadao.jpg'),
    },
    {
      id: 2,
     name: "baratao",
     image: require('../../../assets/images/SupermercadosPesquisar/baratao.png'),
    },
    {
      id: 3,
     name: "BIGBomprecoLogo",
     image: require('../../../assets/images/SupermercadosPesquisar/BIGBomprecoLogo.png'),
    },
    {
      id: 4,
     name: "caminho",
     image: require('../../../assets/images/SupermercadosPesquisar/caminho.jpg'),
    },
    {
      id: 5,
     name: "coemta",
     image: require('../../../assets/images/SupermercadosPesquisar/coemta.jpg'),
    },
    {
      id: 6,
     name: "extra",
     image: require('../../../assets/images/SupermercadosPesquisar/extra.jpg'),
    },
    {
      id: 7,
     name: "frangolandia",
     image: require('../../../assets/images/SupermercadosPesquisar/frangolandia.png'),
    },
    {
      id: 8,
     name: "gbarbosa",
     image: require('../../../assets/images/SupermercadosPesquisar/gbarbosa.png'),
    },
    {
      id: 9,
     name: "ismael",
     image: require('../../../assets/images/SupermercadosPesquisar/ismael.png'),
    },
    {
      id: 10,
     name: "logo-pinheiro-atratis",
     image: require('../../../assets/images/SupermercadosPesquisar/logo-pinheiro-atratis.jpg'),
    },
    {
      id: 11,
     name: "paodeacucar",
     image: require('../../../assets/images/SupermercadosPesquisar/paodeacucar.png'),
    },
    {
      id: 12,
     name: "paraná",
     image: require('../../../assets/images/SupermercadosPesquisar/paraná.jpg'),
    },
    {
      id: 13,
     name: "saoluiz",
     image: require('../../../assets/images/SupermercadosPesquisar/saoluiz.png'),
    },
    {
      id: 14,
     name: "superdopovo",
     image: require('../../../assets/images/SupermercadosPesquisar/superdopovo.png'),
    },
    {
      id: 15,
     name: "superlagoa",
     image: require('../../../assets/images/SupermercadosPesquisar/superlagoa.jpg'),
    },
    {
      id: 16,
     name: "supermercados-bh",
     image: require('../../../assets/images/SupermercadosPesquisar/supermercados-bh.jpg'),
    }
  ]);
  
  const renderItem = ({ item }: any ) => (
    <Markets
      id={item.id}
      name={item.name}
      image={item.image}
    />
  );

  return (
    <Container>
      <FlatList
        data={markets}
        numColumns={4}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
    
  );
}

export default MarketList;