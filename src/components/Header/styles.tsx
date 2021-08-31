import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

export const Head = styled.View`
  width: 100%;
  height: 50px;
  padding: 64px 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 28px;
  line-height: 38px;
  color: #FFFFFF;
  font-family: "Poppins_600SemiBold";
`

export const HeaderText = styled.Text`
  font-size: 14px;
  color: #FFFFFF;
` 

export const ArrowContainer = styled.TouchableOpacity`
  background: #FFFFFF;
  width: 24px;
  height: 23.77px;
  border-radius: 30px;

  left: 15px;
  top: 25px;
`


export const EditContainer = styled.TouchableOpacity`
  background: #FFFFFF;

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
  margin-left: 1px;
`

export const TextContainer = styled.View`
  align-items: center;
  padding-top: 30px;
`

export const MarketAddress = styled.Text`
`

export const OpenTime = styled.Text`
`
