import React, { useState } from 'react';
import styled from 'styled-components/native';
import BestPrices from '../components/BestPrices';

import products from '../../products.json'


import { LeftArrowIcon, ArrowContainer, TextContainer, MarketAddress, OpenTime} from '../components/Header/styles';
import Typography from '../components/Typography';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Container = styled.ScrollView`
  flex: 1;
`

type MarketImagesProps = {
  readonly url: string;
}

const MarketContainer = styled.View<MarketImagesProps>`
  background: #FFFFFF;
  height: 230px;
  width: 100%;
`

const DetailsContainer = styled.View`
  background: ${({ theme }) => theme.colors.primary};
  height: 136px;
  width: 100%; 
`

const MarketDetailsContainer = styled.View`
  height: 168px;
  width: 345px;
  

  position: absolute;
  left: 4%;
  right: 4%;
  top: 23%;
  bottom: 52.59%;

  background: #FFFFFF;
  border-radius: 8px;
`

const ProductContainer = styled.ScrollView`
  width: 100%;
  min-height: 404px;
  background: ${({ theme }) => theme.colors.defaultYellow};
`

type MarketProps = {
  market: {
    id: number;
    image: string;
    name: string;
  }
}

export const Card = styled.View`
  background: ${({ theme }) => theme.colors.greyBackground};
  width: 292px;
  height: 333px;
  border-radius: 8px;
  margin-left: 20px;
  border: 1px solid #FFC301;

  display: flex;
  justify-content: center;
  align-items: center;
`

const MarketScreen: React.FC<MarketProps> = ({ route, navigation }: any) => {

  const { id, img, name } = route.params;

  const goBack = () => {
    navigation.goBack();
  }

  const [marketProducts, setProducts] = useState([
    {Id: "1",
      Title: "Banana",
      Category: "Fruit",
      SubCategory: "Musaceae",
      Manufacturer: "The banana company",
      Contents: "Banana",
      Description: "The banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called plantains. The fruit is variable in size, color and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind which may be green, yellow, red, purple, or brown when ripe. The fruits grow in clusters hanging from the top of the plant. Almost all modern edible parthenocarpic (seedless) bananas come from two wild species - Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa x paradisiaca for the hybrid Musa acuminata x M. balbisiana, depending on their genomic constitution. The old scientific name Musa sapientum is no longer used. It is also yellow.",
      Organic: true,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/banana.jpg",
      OrgPrice: '7',
      Price: '7'
    }, {
      Id: "2",
      Title: "Cinnamon roll",
      Category: "Bakery",
      SubCategory: "Cookies and sweets",
      Manufacturer: "Awesome bakery",
      Contents: "Wheat flour,Cinnamon,Bunnies",
      Description: "A cinnamon roll (also cinnamon bun, cinnamon swirl, cinnamon Danish and cinnamon snail) is a sweet roll served commonly in Northern Europe and North America. In North America its common use is for breakfast. Its main ingredients are flour, cinnamon, sugar, and butter, which provide a robust and sweet flavor. In some places it is eaten as a breakfast food and is often served with cream cheese or icing.",
      Organic: false,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/cinnamonroll.jpg",
      OrgPrice: '5',
      Price: '5'
    },{
    Id: "3",
      Title: "Apple",
      Category: "Fruit",
      SubCategory: "Rosaceae",
      Manufacturer: "Fruits n Veggies",
      Contents: "Apple",
      Description: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.",
      Organic: false,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/apple.jpg",
      OrgPrice: '6',
      Price: '6'
    },{
    Id: "4",
      Title: "Minced meat",
      Category: "Meat",
      SubCategory: "Beef",
      Manufacturer: "UltraBovine",
      Contents: "Ground beef",
      Description: "Ground beef, beef mince, minced meat, hamburger (in the United States) is a ground meat made of beef, finely chopped by a meat grinder. It is used in many recipes including hamburgers and cottage pie. In some parts of the world, a meat grinder is called a mincer.",
      Organic: false,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/mincedmeat.jpg",
      OrgPrice: '60',
      Price: '60'
    },{
    Id: "5",
      Title: "Milk",
      Category: "Dairy",
      SubCategory: "Milk",
      Manufacturer: "Early",
      Contents: "Milk from cow",
      Description: "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. Milk contains many other nutrients and the carbohydrate lactose.",
      Organic: false,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/milk.jpg",
      OrgPrice: '10',
      Price: '10'
    },{
    Id: "6",
      Title: "Organic Milk",
      Category: "Dairy",
      SubCategory: "Milk",
      Manufacturer: "Early",
      Contents: "Milk from cow",
      Description: "Milk is a white liquid produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals before they are able to digest other types of food. Early-lactation milk contains colostrum, which carries the mother's antibodies to its young and can reduce the risk of many diseases. Milk contains many other nutrients and the carbohydrate lactose.",
      Organic: true,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/organicmilk.jpg",
      OrgPrice: '12',
      Price: '12'
    },{
    Id: "7",
      Title: "Organic Apple",
      Category: "Fruit",
      SubCategory: "Rosaceae",
      Manufacturer: "The banana company",
      Contents: "Apple",
      Description: "The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.",
      Organic: true,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/greenapple.jpg",
      OrgPrice: '7',
      Price: '7'
    },{
    Id: "8",
      Title: "Ground beef",
      Category: "Meat",
      SubCategory: "Beef",
      Manufacturer: "MeatNStuff",
      Contents: "Ground beef",
      Description: "Ground beef, beef mince, minced meat, hamburger (in the United States) is a ground meat made of beef, finely chopped by a meat grinder. It is used in many recipes including hamburgers and cottage pie. In some parts of the world, a meat grinder is called a mincer.",
      Organic: true,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/groundbeef.jpg",
      OrgPrice: '65',
      Price: '65'
    },{
    Id: "9",
      Title: "Steak",
      Category: "Meat",
      SubCategory: "Beef",
      Manufacturer: "UltraBovine",
      Contents: "Beef",
      Description: "A steak is a meat generally sliced perpendicular to the muscle fibers, potentially including a bone. Exceptions, in which the meat is sliced parallel to the fibers, include the skirt steak that is cut from the plate, the flank steak that is cut from the abdominal muscles, and the Silverfinger steak that is cut from the loin and includes three rib bones. When the word \"steak\" is used without qualification, it generally refers to a beef steak. In a larger sense, there are also fish steaks, ground meat steaks, pork steak and many more varieties.",
      Organic: true,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/steak.jpg",
      OrgPrice: '100',
      Price: '100'
    },{
    Id: "10",
      Title: "Chicken breast",
      Category: "Meat",
      SubCategory: "Bird",
      Manufacturer: "MeatNStuff",
      Contents: "Meat from chicken",
      Description: "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
      Organic: false,
      ImageUrl: "http://www.loop54.com/hubfs/demo_images/chickenbreast.jpg",
      OrgPrice: '55',
      Price: '55'
    }])


    const Item = ({ Title, ImageUrl, Description }: any) => (
      <View>
        <Text>{Title}</Text>
      </View>
    );

    const renderItem = ({ item }: any) => (
      <Item products={item} />
    );
    

  return (
    <Container>
      <MarketContainer url={img}>
        <ArrowContainer onPress={goBack} style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11,
        }}>
          <LeftArrowIcon name="left" size={20} color="#E84C4F" />
        </ArrowContainer>
      </MarketContainer>
      <DetailsContainer>
      </DetailsContainer>
      <MarketDetailsContainer style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          
          elevation: 11,
        }}>
        <TextContainer>
          <Typography variant="h2">{name}</Typography>
          <MarketAddress>Endereço do supermercado</MarketAddress>
          <OpenTime>Abre: 8 am - 8 pm</OpenTime>
        </TextContainer>
      </MarketDetailsContainer>
      <ProductContainer>
        <FlatList
          data={marketProducts}
          renderItem={renderItem}
          keyExtractor={item => item.Id.toString()}
        />
      </ProductContainer>
    </Container>
  );
}

export default MarketScreen;