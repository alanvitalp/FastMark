import React from 'react'

import styled from 'styled-components/native'


import { Image } from 'react-native'
import Typography from '../components/Typography'

const logo = require("../../assets/images/logo.png")
const signIn = require("../../assets/images/signin.png")

import { Link } from '@react-navigation/native';


const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const FormsContainer = styled.View`
  height: 499px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 96px 42px;
  border-radius: 10px;

  align-items: center;
  /* justify-content: center; */
`

const InputWrapper = styled.View`
  gap: 38px;
  margin-top: 34px;
`

const FormInput = styled.TextInput`
  height: 40px;
  width: 213px;
  background: #FFFFFF;
  padding: 10px;
  border-radius: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const SignIn = styled.TouchableOpacity`
  margin-top: 31px;
`

const LoginButton = styled.TouchableOpacity`
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

const SignUp = styled.TouchableOpacity`
  font-family: 'Poppins-Medium';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 14px;

  text-decoration-line: underline;

  align-items: center;

  margin-top: -48px;
`

const LoginScreen = () => {
  

  return (
    <Container>
      <FormsContainer>
        <Image source={{  uri: logo }} style={{ width: 103, height: 80, marginTop: 54 }}/>
        <InputWrapper>
          <FormInput placeholder="Login"/>
          <FormInput placeholder="Senha"/>
        </InputWrapper>
        <SignIn>
          <Image source={{ uri: signIn }}  style={{ width: 122, height: 30}}/>
        </SignIn>
        <LoginButton>
          <Typography variant="p">Logar</Typography>
        </LoginButton>
      </FormsContainer>
      <SignUp>
       <Link to="/" style={{ color: "#FFFFFF", textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}>Não tem uma conta? Cadastre-se</Link>
      </SignUp>
    </Container>
  )
}

export default LoginScreen
