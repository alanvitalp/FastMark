import React from 'react';

import { Container, Input } from './styles';

const Forms: React.FC = () => {
  return (
    <Container>
        <Input placeholder="emailuser@dominio.br"/>
        <Input placeholder="endereço rua tal"/>
        <Input />
    </Container>
  );
}

export default Forms;