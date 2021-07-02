import React from 'react';
import { Head, HeaderTitle, HeaderText } from './styles'

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Head>
      <HeaderTitle>
        Olá Usuário,
      </HeaderTitle>
      <HeaderText>
        Separamos os seus supermercados favoritos.
      </HeaderText>
    </Head>
  );
}

export default Header;