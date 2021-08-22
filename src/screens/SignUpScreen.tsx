import React, { useState } from 'react'

import styled from 'styled-components/native'


import { Image } from 'react-native'
import Typography from '../components/Typography'

const logo = require("../../assets/images/logo.png")
const signUp = require("../../assets/images/signup.png")

import useInput from '../hooks/useInput'

import AsyncStorage from "@react-native-async-storage/async-storage";


const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const FormsContainer = styled.View`
  min-height: 623px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 51px 42px;
  border-radius: 10px;

  align-items: center;
  /* justify-content: center; */
`

const InputWrapper = styled.View`
  gap: 28px;
  margin-top: 44px;
`

const FormInput = styled.TextInput`
  height: 40px;
  width: 213px;
  background: #FFFFFF;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;

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

const Picker = styled.Picker`
  outline: none;
  border: none;
  background: #FFFFFF;
  padding-left: 10px;
  border-radius: 10px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`


const SignUpScreen = ({ navigation }: any) => {
  const [selectedValue, setSelectedValue] = useState("Comprar");

  const username = useInput('')
  const cpf = useInput('')
  const email = useInput('')
  const password = useInput('')

  const handleCreateAccount = async () => {
    try {
      const accounts = await AsyncStorage.getItem(
        "@markefast/users"
      );
      if (accounts !== null) {
        const users = JSON.parse(accounts);
        const isUserExist = users.some((obj: any) => obj.username === username);

        if (!isUserExist) {
          const newUsers = [
            ...users,
            {
              username,
              password,
              cpf,
              email,
              selectedValue
            },
          ];
          await AsyncStorage.setItem(
            "@markefast/users",
            JSON.stringify(newUsers)
          );
          navigation.navigate("Login");
        }
      } else {
        await AsyncStorage.setItem(
          "@markefast/users",
          JSON.stringify([{ username, password, selectedValue }])
        );
        navigation.navigate("Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormsContainer>
        <Image source={{  uri: logo }} style={{ width: 103, height: 80, marginTop: 24 }}/>
        <InputWrapper>
          <FormInput placeholder="NOME DE USUÁRIO"/>
          <FormInput placeholder="CPF"/>
          <FormInput placeholder="E-MAIL"/>
          <FormInput placeholder="SENHA"/>
          <Picker
            selectedValue={selectedValue}
            style={{ height: 40, width: 213  }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Comprar" value="Comprar" />
            <Picker.Item label="Vender" value="Vender" />
            <Picker.Item label="Entregar" value="Entregar" />
            </Picker>
        </InputWrapper>
        <SignIn>
          <Image source={{ uri: signUp }}  style={{ width: 126, height: 21}}/>
        </SignIn>
        <LoginButton onPress={handleCreateAccount}>
          <Typography variant="p">Cadastrar-se</Typography>
        </LoginButton>
      </FormsContainer>
    </Container>
  )
}

export default SignUpScreen
