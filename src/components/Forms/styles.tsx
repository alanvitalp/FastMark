import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 52px;
  
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 313px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 24px;

  padding-left: 12px;

  background: ${({ theme }) => theme.colors.tabIconColor};
`