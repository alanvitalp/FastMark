import React from 'react';

import { Container, Icons, HomeIcon, SearchIcon, ShoppingBag, UserIcon } from './styles';

const TabBar: React.FC = () => {
  return (
    <Container>
      <Icons>
        <HomeIcon name="home" size={28} color="#C5C5C5"/>
        <SearchIcon name="search1" size={28} color="#C5C5C5"/>
        <ShoppingBag  name="shopping-bag" size={28} color="#C5C5C5"/>
        <UserIcon name="user-o" size={28} color="#C5C5C5"/>
      </Icons>
    </Container>
  );
}

export default TabBar;