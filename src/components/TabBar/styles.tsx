import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

export const Container = styled.View`
  height: 80px; 
  width: 100%;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icons = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.tabIconColor};
`

export const HomeIcon = styled(AntDesign)`
`

export const SearchIcon = styled(AntDesign)`
`

export const ShoppingBag = styled(Feather)`
`

export const UserIcon = styled(FontAwesome)`
`