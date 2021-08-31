import React from 'react';
import { View } from 'react-native';
import { ArrowContainer, LeftArrowIcon, EditContainer } from '../components/Header/styles'

import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import Cards from '../components/Cards';
import TabBar from '../components/TabBar';
import { useGoogle } from '../contexts/AuthGoogle';


type UserProps = {
  navigation: any;
};

const Container = styled.View`
  flex: 1;
  background : #c4c4c4;
`
const UserInfoContainer = styled.View`
  background : #c4c4c4;
  margin-top: 50px;
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

const UserImage = styled.View<any>`
  position: absolute;
  width: 171px;
  height: 174px;
  left: 102px;
  top: 11px;

  border-radius: 60px;
  background: ${({ theme }) => theme.colors.white};
`

const GoogleImageUser = styled.Image`
  border-radius: 60px;
  flex: 1;
`

 const Forms = styled.View`
  margin-top: 52px;
  
  align-items: center;
`;

 const Input = styled.TextInput`
  width: 313px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 24px;

  padding-left: 12px;

  background: ${({ theme }) => theme.colors.tabIconColor};
  color: #000000; 
`

const screens: React.FC<UserProps> = ({ navigation }: any) => {

  const { user } = useGoogle();

  const handleGoBack = () => {
    navigation.goBack();
  }

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
          
          elevation: 11}} onPress={handleGoBack}>
          <LeftArrowIcon name="left" size={20} color="#E84C4F"/>
        </ArrowContainer>
        <UserImage>
          <GoogleImageUser source={{ uri: user?.user.photoUrl }} style={{ resizeMode: 'cover' }}/>
        </UserImage>
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
          <Forms>
            <Input value={user?.user.name} editable={false}/>
            <Input value={user?.user.email} editable={false}/>
            <Input placeholder="endereço"/>
          </Forms>
          <Cards/>
        </FormsContainer>
      </FormBackgroundContainer>
    </Container>
  );
}

export default screens;