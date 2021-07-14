import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

export const Head = styled.View`
  padding: 4rem 1rem;
  width: 100%;
  height: 50px;
`;

export const HeaderTitle = styled.Text`
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
  font-family: "Poppins-SemiBold";
`

export const HeaderText = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
  font-family: "Poppins-Regular";
` 

export const ArrowContainer = styled.View`
  background: #FFFFFF;
  width: 24px;
  height: 23.77px;
  border-radius: 30px;

  left: 15px;
  top: 25px;

  align-items: center;
  justify-content: center;
`


export const EditContainer = styled.View`
  background: #FFFFFF;
  /* width: 24px;
  height: 23.77px; */
  border-radius: 30px;

  position: absolute;
  width: 24px;
  height: 24px;
  left: 339px;
  top: 25px;

  align-items: center;
  justify-content: center;
`

export const LeftArrowIcon = styled(AntDesign)`
`

export const TextContainer = styled.View`
  align-items: center;
  padding-top: 30px;
  gap: 14px;
`

export const MarketAddress = styled.Text`
  font-family: "Poppins-Regular";
`

export const OpenTime = styled.Text`
  font-family: "Poppins-Regular";
`
