import React from 'react'

import styled from 'styled-components/native'

import useInput from '../hooks/useInput'


import { Image } from 'react-native'
import Typography from '../components/Typography'

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthProvider } from "../contexts/AuthProvider";

import { Link } from '@react-navigation/native';

import { useEffect } from 'react'
import { useGoogle } from '../contexts/AuthGoogle'


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
  margin-top: 34px;
`

const FormInput = styled.TextInput`
  height: 40px;
  width: 213px;
  background: #FFFFFF;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 24px;

`

const SignIn = styled.TouchableOpacity`
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

  font-family: 'Poppins_500Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
` 

const SignUp = styled.TouchableOpacity`
  font-family: 'Poppins_500Medium';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 14px;

  text-decoration-line: underline;

  align-items: center;

  margin-top: -48px;
`

const LoginScreen = ({ navigation }: any) => {
  const { googleSignIn, user, typeAction } = useGoogle();
  const { updateAuthenticatedUser } = useAuthProvider();

  const username = useInput('')
  const password = useInput('')
  
  const handleLogin = async () => {
    try {
      const accounts = await AsyncStorage.getItem(
        "@markefast/users"
      );
      if (accounts === null) return;

      const users = JSON.parse(accounts);
      const user = users.find(
        (obj: any) => obj.username === username && obj.password === password
      );

      if (user) {
        navigation.navigate('user', user)
        updateAuthenticatedUser(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginWithGoogle = async () => {
    try {
      await googleSignIn();

      if (typeAction === "success") {
        navigation.navigate('home', user);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <FormsContainer>
        <Image source={require("../../assets/images/logo.png") } style={{ width: 103, height: 80, marginTop: 54 }}/>
        <InputWrapper>
          <FormInput placeholder="Login"/>
          <FormInput placeholder="Senha" secureTextEntry={true}/>
        </InputWrapper>
        <SignIn onPress={googleSignIn} >
          <Image source={require("../../assets/images/signin.png")}  style={{ width: 122, height: 30}}/>
        </SignIn>
        <LoginButton onPress={handleLogin}>
          <Typography variant="p">Logar</Typography>
        </LoginButton>
      </FormsContainer>
      <SignUp>
       <Link to="/signUp" style={{ color: "#FFFFFF"}}>Não tem uma conta? Cadastre-se</Link>
      </SignUp>
    </Container>
  )
}

export default LoginScreen
