import React from 'react';
import { View } from 'react-native';
import { ArrowContainer, LeftArrowIcon, EditContainer } from '../components/Header/styles'

import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import Forms from '../components/Forms';
import Cards from '../components/Cards';
import Typography from '../components/Typography';


type UserProps = {
  navigation: any;
};

const Container = styled.View`
  flex: 1;
`
const UserInfoContainer = styled.View`
  background : ${({ theme }) => theme.colors.defaultYellow};
  width: 100%;
  height: 209px;
`

const FormBackgroundContainer = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
`

const FormsContainer = styled.View`
  width: 354px;
  height: 438px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 52px 16px;

  gap: 23px;
  align-items: center;
`

const UserImage = styled.View`
  position: absolute;
  width: 171px;
  height: 174px;
  left: 102px;
  top: 11px;

  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
`

const Button = styled.TouchableOpacity`
  width: 142px;
  height: 47px;
  margin-top: 24px;

  background: ${({ theme }) => theme.colors.defaultOrange};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
` 

export const Input = styled.TextInput`
  width: 313px;
  height: 40px;
  border-radius: 10px;

  padding-left: 12px;

  background: ${({ theme }) => theme.colors.tabIconColor};
`

const AddProduct: React.FC<UserProps> = ({ navigation }) => {
  return (
    <Container>
      <UserInfoContainer>
        <ArrowContainer style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11}}>
          <LeftArrowIcon name="left" size={20} color="#E84C4F"/>
        </ArrowContainer>
        <UserImage  />
        <EditContainer style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11}}>
          <Feather name="edit-2" size={18} color="#E84C4F" />
        </EditContainer>
      </UserInfoContainer>
      <FormBackgroundContainer>
        <FormsContainer>
          <Input placeholder="Nome do produto"/>
          <Input placeholder="Descrição adicional"/>
          <Input placeholder="Valor"/>
          <Button>
            <Typography variant="p">CADASTRAR</Typography>
          </Button>
        </FormsContainer>
      </FormBackgroundContainer>
    </Container>
  );
}

export default AddProduct;