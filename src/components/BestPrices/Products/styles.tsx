import styled from 'styled-components/native';

interface CardImageProps {
  readonly url: string;
}

export const Container = styled.TouchableOpacity`
  margin-top: 26px;
`;

export const Card = styled.View<CardImageProps>`
  background: ${({ theme }) => theme.colors.defaultYellow};
  width: 292px;
  height: 333px;
  border-radius: 8px;
  margin-left: 20px;
  border: 1px solid #FFC301;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${props => props.url});
  background-size: contain, cover;
  background-repeat: no-repeat;
  background-position: center;

`

export const Details = styled.View`
  width: 268px;
  height: 101px;
  border-radius: 8px;
  mix-blend-mode: normal;
  margin-top: 186px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  background: ${({ theme }) => theme.colors.defaultOrange};
  white-space: pre-line;

  padding: 20px 18px;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-family: "Poppins-Medium";
`
export const Market = styled.Text`
  color: #FFFFFF;
  white-space: nowrap;
  font-size: 12px;
  margin-top: 4px;
  font-family: "Poppins-Regular";
`
export const ProductPrice = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 4px;
  font-size: 14px;
`

export const Price = styled.Text`
  color: #FFFFFF;
  text-decoration: line-through black;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: "Poppins-Medium";
`

export const Discount = styled.Text`
  color: #FFFFFF;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: "Poppins-Medium";
`
