import React from 'react';
import styled from 'styled-components/native';

import { LeftArrowIcon, ArrowContainer, TextContainer, MarketAddress, OpenTime} from '../components/Header/styles';
import Typography from '../components/Typography';

const Container = styled.ScrollView`
  flex: 1;
`

type MarketImagesProps = {
  readonly url: string;
}

const MarketContainer = styled.View<MarketImagesProps>`
  background: #FFFFFF;
  height: 230px;
  width: 100%;

  background-image: url(${ props => props.url});
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position: center; 
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
  top: 23%;
  bottom: 52.59%;

  background: #FFFFFF;
  border-radius: 8px;
`

const ProductContainer = styled.View`
  width: 100%;
  height: 366px;
  background: ${({ theme }) => theme.colors.defaultYellow};
`

type MarketProps = {
  market: {
    id: number;
    image: string;
    name: string;
  }
}

const MarketScreen: React.FC<MarketProps> = ({ route, navigation }: any) => {

  const { id, img, name } = route.params;

  const goBack = () => {
    navigation.goBack();
  }

  return (
    <Container>
      <MarketContainer url={img}>
        <ArrowContainer onPress={goBack} style={{
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
      <MarketDetailsContainer style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11,
        }}>
        <TextContainer>
          <Typography variant="h2">{name}</Typography>
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