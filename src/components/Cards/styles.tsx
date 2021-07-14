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
  font-family: 'Poppins-Regular';
  line-height: 20px;
`

export const CardContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const CardItem = styled.View`

`

export const ImageView = styled.View`
  border-radius: 12px;
`

export const CardImage = styled.Image<ImageSourceType>`
  width: 69.7px;
  height: 63.93px;
`

export const CardInfo = styled.Text`
  font-size: 10px;
`