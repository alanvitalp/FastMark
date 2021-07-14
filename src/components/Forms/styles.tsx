import styled from 'styled-components/native';

export const Container = styled.View`
  gap: 23px;
  margin-top: 52px;
  
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 313px;
  height: 40px;
  border-radius: 10px;

  padding-left: 12px;

  background: ${({ theme }) => theme.colors.tabIconColor};
`