import React from 'react';
import { Container, BackIcon, BackButton, TextContainer} from './styles';


import Typography from '../Typography';


const SearchHeader: React.FC = () => {
  return (
    <Container>
      <BackButton>
        <BackIcon name="left" size={28} color="#E84C4F"/>
      </BackButton>
      <TextContainer>
        <Typography variant="h2">Pesquisar</Typography>
      </TextContainer>
    </Container>
  );
}

export default SearchHeader;