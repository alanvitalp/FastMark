import React from 'react';

import { Container, MarketImage } from './styles';

type MarketProps = {
  id: number;
  name: string;
  image: string;
}

const Markets: React.FC<MarketProps> = ( { image } ) => {
  return (
    <Container>
      <MarketImage source={{ uri: image }}/>
    </Container>
  );
}

export default Markets;