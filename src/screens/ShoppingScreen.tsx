import React, { useState } from 'react';

import styled from 'styled-components/native';

import * as styles from '../components/SearchHeader/styles'
import Typography from '../components/Typography';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform } from 'react-native';

type ShoppingProps = {
  navigation: any;
}


export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 16px;
  margin-top: 19px;
  justify-content: center;
  align-items: center;
  z-index: 3;
` 

export const TextContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin: 24px auto 10px -48px;
  flex: 1;
`

export const BackIcon = styled(AntDesign)`
  
`

const BackgroundContainer = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const SocialDistancingContainer = styled.View`
  height: 80px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;
`

const SwitchWrapper = styled.View`
  flex-direction: row;
  gap: 3rem;
`

const SocialSwitch = styled.Switch`
  height: 24px;
`
const UserAddress = styled.View`
  height: 140px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;
  gap: 0.5rem;
`

const InputWrapper = styled.View`
   flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
`

const AddInfo = styled.TextInput`
  flex: 1;
  background: #FFFFFF;
  padding: 10px 10px 10px 0;
  outline: none;
  border: none;
`

const ShoppingCart = styled.View`
  min-height: 185px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;
`

const TextWrapper = styled.View`
  flex-direction: row;
  gap: 21px;
`

const PaymentContainer = styled.View`
  height: 185px;
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.defaultOrange};

  justify-content: space-around;
`

const TotalValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

const Economy = styled.View`
  flex-direction: row;
  justify-content: space-between;
  height: 20px;
`

const Divider = styled.View`
  border: 1px solid #CACACA;
`

const ToPay = styled.View`
  flex-direction: row;
  justify-content: space-between;
`


const screens: React.FC<ShoppingProps> = ({ navigation }) => {

  const [cart, setCart] = useState([]);
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <>
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon name="left" size={28} color="#E84C4F"/>
      </BackButton>
      <TextContainer>
        <Typography variant="h2">Carrinho</Typography>
      </TextContainer>
    </Container>
    <BackgroundContainer>
      <SocialDistancingContainer>
        <SwitchWrapper>
          <Typography variant="p">Manter distanciamento social</Typography>
          <SocialSwitch 
          thumbColor={Platform.OS=='ios'?'#E84C4F':(isEnabled ?'#E84C4F':'#E84C4F')}
          trackColor={{false: "#FFFFFF", true: "#FFFFFF"}}
          onValueChange={toggleSwitch} value={isEnabled}   
          />
        
        </SwitchWrapper>
        
        <Typography variant="p">Não receber diretamente com o entregador</Typography>
      </SocialDistancingContainer>
      <UserAddress>
        <Typography variant="p">Entregar em:</Typography>
        <Typography variant="p">Rua do usuário, 2021</Typography>
        <InputWrapper>
          <Ionicons name="add" size={24} style={{ padding: 10 }}color="black" />
          <AddInfo placeholder="Observações adicionais"/>
        </InputWrapper>
      </UserAddress>
      <ShoppingCart>
        <TextWrapper>
          <Typography variant="h3">Itens no carrinho</Typography>
          <Typography variant="p">+ Add items</Typography>
        </TextWrapper>
        { cart.length !== 0 ? <Text>Hello world!</Text> : <Typography style={{ alignSelf: 'center', marginTop: '2.5 rem' }}variant="p">Carrinho vazio</Typography>} 
      </ShoppingCart>
      <PaymentContainer>
        <Typography variant="h3">Payment</Typography>
        <TotalValue>
          <Typography variant="p">Valor total</Typography>
          <Typography variant="p">R$0,00</Typography>
        </TotalValue>
        <Economy>
          <Typography variant="p">Você economiza</Typography>
          <Typography variant="p">R$0,00</Typography>
        </Economy>
        <Divider/>
        <ToPay>
          <Typography variant="p">A pagar</Typography>
          <Typography variant="p">R$0,00</Typography>
        </ToPay>
      </PaymentContainer>
    </BackgroundContainer>
    </>
  );
}

export default screens;