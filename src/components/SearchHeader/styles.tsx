import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';
import { ButtonProps } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 14px;
  margin-top: 19px;
  justify-content: center;
  align-items: center;
  z-index: 3;
` 

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px auto 10px -48px;
  flex: 1;
`

export const BackIcon = styled(AntDesign)`
  
`
