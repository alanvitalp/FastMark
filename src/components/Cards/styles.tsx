import styled from 'styled-components/native';


type ImageSourceType = {
  source: {
    uri: string;
  };
} 


export const Container = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const CardContainerLabel = styled.Text`
  font-size: 14px;
  line-height: 20px;
`

export const CardContainer = styled.View`
  justify-content: space-around;
  width: 345px;
  align-items: center;
  flex-direction: row;
`

export const CardItem = styled.View`
  justify-content: center;
  align-items: center;

`

export const ImageView = styled.View`
  margin-top: 24px;
`

export const CardImage = styled.Image<ImageSourceType>`
  width: 69.7px;
  height: 63.93px;
  border-radius: 10px;
`

export const CardInfo = styled.Text`
  font-size: 10px;
  margin-top: 8px;
  color: #000000;
  font-weight: 500;
  font-family: 'Poppins_500Medium'
`