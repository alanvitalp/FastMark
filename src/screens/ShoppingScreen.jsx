import React, { useContext, useEffect, useState } from 'react';

import styled from 'styled-components/native';

import Typography from '../components/Typography';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Text, Platform, TouchableOpacity, View } from 'react-native';
import { CartContext } from '../contexts/CartContext';
import { FlatList } from 'react-native-gesture-handler';
import { Product } from '../components/Product';
import { ProductsListCart } from '../components/ProductListCart';
import useInput from '../hooks/useInput';
import { SafeAreaView } from 'react-native-safe-area-context';

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
  height: 58px;
  justify-content: center;
  align-items: center;
  margin: 26px auto 10px -48px;
  flex: 1;
`

export const BackIcon = styled(AntDesign)`
  
`

const BackgroundContainer = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

const SocialDistancingContainer = styled.View`
  min-height: 100px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;
`

const SwitchWrapper = styled.View`
  flex-direction: row;
`

const SocialSwitch = styled.Switch`
  height: 24px;
  margin-left: 24px;
`
const UserAddress = styled.View`
  min-height: 140px;
  background: ${({ theme }) => theme.colors.defaultYellow};
  margin: 16px 15px;
  padding: 20px 12px;
  border-radius: 8px;

`

const InputWrapper = styled.View`
   flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: 12px;
`

const AddInfo = styled.TextInput`
  flex: 1;
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
  justify-content: space-between;
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

const Observation = styled.View`
  padding: 8px 10px;
  justify-content: center;
`

const TextObs = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
`

const Item = ({ item }) => (
  <Observation>
    <TextObs>* {item}</TextObs>
  </Observation>
);



const screens = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );


  const { getTotalPrice } = useContext(CartContext);

  const [total, setTotal] = useState(0);
  const [observations, setObservations] = useState([]);
  const [message, setMessage] = useState('');

  const addObs = () => {
    setObservations(oldArray => [...oldArray, message]);
  };

  useEffect(() => {
    setTotal(getTotalPrice());
  });
  
  const handleGoBack = () => {
    navigation.goBack();
  }

  const handleGoToProducts= () => {
    navigation.navigate('Products');
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
          thumbColor={Platform.OS=='ios'?'#E84C4F':(isEnabled ? '#E84C4F' : 'white')}
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
          <TouchableOpacity onPress={addObs} ><Ionicons name="add" size={24} style={{ padding: 10 }}color="black" /></TouchableOpacity>
          <AddInfo defaultValue={message} onChangeText={text => setMessage(text)} placeholder="Observações adicionais"/>
        </InputWrapper>
        <SafeAreaView>
          <FlatList
            data={observations}
            renderItem={renderItem}
          />
        </SafeAreaView>
      </UserAddress>
      <ShoppingCart>
        <TextWrapper>
          <Typography variant="h3">Itens no carrinho</Typography>
          <TouchableOpacity onPress={handleGoToProducts}><Typography variant="p">+ Add items</Typography></TouchableOpacity>
        </TextWrapper>
        <ProductsListCart />
      </ShoppingCart>
      <PaymentContainer>
        <Typography variant="h3">Payment</Typography>
        <TotalValue>
          <Typography variant="p">Valor total</Typography>
          <Typography variant="p">R${total}</Typography>
        </TotalValue>
        <Economy>
          <Typography variant="p">Você economiza</Typography>
          <Typography variant="p">R$0</Typography>
        </Economy>
        <Divider/>
        <ToPay>
          <Typography variant="p">A pagar</Typography>
          <Typography variant="p">R${total}</Typography>
        </ToPay>
      </PaymentContainer>
    </BackgroundContainer>
    </>
  );
}

export default screens;