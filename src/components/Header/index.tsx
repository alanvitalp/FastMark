import React from 'react';
import { useGoogle } from '../../contexts/AuthGoogle';
import { Head, HeaderTitle, HeaderText } from './styles'


const Header: React.FC = () => {
  const { user } = useGoogle();
  return (
    <Head>
      <HeaderTitle>
        Olá {user},
      </HeaderTitle>
      <HeaderText>
        Separamos os seus supermercados favoritos.
      </HeaderText>
    </Head>
  );
}

export default Header;