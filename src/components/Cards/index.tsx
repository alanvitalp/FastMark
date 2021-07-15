import React from 'react';
import { View } from 'react-native';

const master = require("../../../assets/images/mastercard.png"); 
const visa = require("../../../assets/images/visa.gif"); 

import { CardContainerLabel, Container, CardContainer, CardImage, CardItem, CardInfo, ImageView } from './styles';

const Cards: React.FC = () => {
  
  return (
    <Container>
      <CardContainerLabel>
        Cartões adicionados:
      </CardContainerLabel>
      <CardContainer>
        <CardItem>
          <ImageView>
            <CardImage source={{ uri: master}} />
          </ImageView>
          <CardInfo>Final 9788</CardInfo>
        </CardItem>
        
        <CardItem>
          <ImageView>
          <CardImage source={{ uri: visa}}/>
          </ImageView>
          
          <CardInfo>Final 4470</CardInfo>
        </CardItem>
        
      </CardContainer>
    </Container>
  );
}

export default Cards;