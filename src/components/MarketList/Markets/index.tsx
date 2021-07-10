import React from 'react';

import { Container, MarketImage } from './styles';

type MarketProps = {
  markets: {
    id: number;
    image: string;
    name: string;
    onPress: () => void;
  }
}

const Markets: React.FC<MarketProps> = ( { markets: { id, image, name, onPress } } ) => {
  return (
    <Container onPress={onPress}>
      <MarketImage source={{ uri: image }}/>
    </Container>
  );
}

export default Markets;