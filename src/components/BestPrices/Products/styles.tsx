import styled from 'styled-components/native';


export const Container = styled.View`
  margin-top: 26px;
  position: relative;
`;

export const Card = styled.TouchableOpacity`
  background: ${({ theme }) => theme.colors.defaultYellow};
  width: 292px;
  min-height: 333px;
  border-radius: 8px;
  margin-left: 20px;
  border: 1px solid #FFC301;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Details = styled.View`
  width: 268px;
  min-height: 101px;
  border-radius: 8px;
  margin-top: 186px;
  background: ${({ theme }) => theme.colors.defaultOrange};

  padding: 20px 18px;

  z-index: 999;
`

export const ProductTitle = styled.Text`
  font-size: 16px;
  color: #FFFFFF;
  font-family: 'Poppins_500Medium';
`
export const Market = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  margin-top: 4px;
  
`
export const ProductPrice = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 4px;
  font-size: 14px;
`

export const Discount = styled.Text`
  color: #FFFFFF;
  text-decoration: line-through black;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: 'Poppins_500Medium';
`

export const Value = styled.Text`
  color: #FFFFFF;
  line-height: 20px;
  letter-spacing: -0.24px;
  font-family: 'Poppins_500Medium';
`

export const ProductImage = styled.Image`
`
