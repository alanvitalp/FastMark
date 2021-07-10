import styled from 'styled-components/native';

import { AntDesign } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
`;

export const FilterInput = styled.TextInput`
  width: 325px;
  height: 36px;
  border-radius: 34px;

  margin-top: 5px;
  
  padding: 20px;

  background: ${({ theme }) => theme.colors.greyBackground};

  font-family: "Poppins-Regular"; 
`

export const SearchIcon = styled(AntDesign)`
  position: absolute;
  right: 40px;
  top: 11px;
`