import React from 'react';
import styled from 'styled-components/native';

import { LeftArrowIcon, ArrowContainer, TextContainer, MarketAddress, OpenTime} from '../components/Header/styles';
import Typography from '../components/Typography';

const Container = styled.ScrollView`
  flex: 1;
`

const MarketContainer = styled.View`
  background: #C4C4C4;
  height: 230px;
  width: 100%;
`

const DetailsContainer = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  height: 136px;
  width: 100%; 
`

const MarketDetailsContainer = styled.View`
  height: 168px;
  width: 345px;
  

  position: absolute;
  left: 4%;
  right: 4%;
  top: 26%;
  bottom: 52.59%;

  background: #FFFFFF;
  border-radius: 8px;
`

const ProductContainer = styled.ScrollView`
  height: 323px;
  background: ${({ theme }) => theme.colors.defaultYellow};
`


const MarketScreen: React.FC = () => {
  return (
    <Container>
      <MarketContainer >
        <ArrowContainer style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11,
        }}>
          <LeftArrowIcon name="left" size={20} color="#E84C4F" />
        </ArrowContainer>
      </MarketContainer>
      <DetailsContainer>
      </DetailsContainer>
      <MarketDetailsContainer>
        <TextContainer>
          <Typography variant="h2">SUPERMERCADO</Typography>
          <MarketAddress>Endereço do supermercado</MarketAddress>
          <OpenTime>Abre: 8 am - 8 pm</OpenTime>
        </TextContainer>
      </MarketDetailsContainer>
      <ProductContainer>
        
      </ProductContainer>
    </Container>
  );
}

export default MarketScreen;