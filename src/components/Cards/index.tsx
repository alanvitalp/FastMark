import React from 'react';
import { View } from 'react-native';


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
            <CardImage source={require("../../../assets/images/mastercard.png")} />
          </ImageView>
          <CardInfo>Final 9788</CardInfo>
        </CardItem>
        
        <CardItem>
          <ImageView>
          <CardImage source={require("../../../assets/images/visa.gif")}/>
          </ImageView>
          
          <CardInfo>Final 4470</CardInfo>
        </CardItem>
        
      </CardContainer>
    </Container>
  );
}

export default Cards;