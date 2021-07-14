import React from 'react';
import { View } from 'react-native';
import { ArrowContainer, LeftArrowIcon, EditContainer } from '../components/Header/styles'

import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import Forms from '../components/Forms';
import Cards from '../components/Cards';


type UserProps = {
  navigation: any;
};

const Container = styled.View`
  flex: 1;
`
const UserInfoContainer = styled.View`
  background : #c4c4c4;
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

const screens: React.FC<UserProps> = ({ navigation }) => {
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
          <Forms />
          <Cards/>
        </FormsContainer>
      </FormBackgroundContainer>
    </Container>
  );
}

export default screens;