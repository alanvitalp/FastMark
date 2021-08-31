import React, { useState } from 'react';
import Header from '../components/Header';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import Favorites from '../components/FavoritesList';
import BestPrices from '../components/BestPrices';
import { useAuthProvider } from '../contexts/AuthProvider';
import { Text, View } from 'react-native';

const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`

type HomeProps = {
  navigation: any;
};

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const { authenticatedUser, updateAuthenticatedUser } = useAuthProvider();

  const [favorites, setFavorites] = useState([
    {
      id: 1,
      img: 'http://www.portaliep.com/images/Parceiros/carnauba-2016.png',
      name: 'Carnaúba',
    },
    {
      id: 2,
      img: 'data:image/png;base64,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',
      name: 'Center Box',
    },
    {
      id: 3,
      img: 'https://imagesapt.apontador-assets.com/fit-in/640x480/b53f114fec874b05a121a62a6f9a0e30/carrefour.jpg',
      name: 'Carrefour',
    },
    {
      id: 4,
      img: 'https://seeklogo.com/images/S/Supermercados_Mambo-logo-A45B8DF987-seeklogo.com.gif',
      name: 'Mambo',
    }
  ]);

  const [products, setProducts] = useState([
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
        },{
        Id: "11",
          Title: "Organic Chicken breast",
          Category: "Meat",
          SubCategory: "Bird",
          Manufacturer: "Happy birds",
          Contents: "Meat from chicken",
          Description: "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
          Organic: true,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/organicchickenbreast.jpg",
          OrgPrice: '65',
          Price: '55',
        }, {
          Id: "12",
          Title: "Whole chicken",
          Category: "Meat",
          SubCategory: "Bird",
          Manufacturer: "MeatNStuff",
          Contents: "Meat from chicken",
          Description: "Chicken is the most common type of poultry in the world. In developed countries, chickens are usually subject to intensive farming methods.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/wholechicken.jpg",
          OrgPrice: '40',
          Price: '0'
      }, {
          Id: "13",
          Title: "Wheat flour",
          Category: "Pantry",
          SubCategory: "Flours",
          Manufacturer: "Grinders inc",
          Contents: "Ground wheat",
          Description: "Wheat flour is a powder made from the grinding of wheat used for human consumption. More wheat flour is produced than any other flour. Wheat varieties are called \"soft\" or \"weak\" if gluten content is low, and are called \"hard\" or \"strong\" if they have high gluten content. Hard flour, or bread flour, is high in gluten, with 12% to 14% gluten content, its dough has elastic toughness that holds its shape well once baked. Soft flour is comparatively low in gluten and thus results in a loaf with a finer, crumbly texture. Soft flour is usually divided into cake flour, which is the lowest in gluten, and pastry flour, which has slightly more gluten than cake flour.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/flour.jpg",
          OrgPrice: '12',
          Price: '12'
        },{
        Id: "14",
          Title: "Powdered sugar",
          Category: "Pantry",
          SubCategory: "Sugar",
          Manufacturer: "Sweet Home Alabama",
          Contents: "Ground sugar from sugar cane",
          Description: "Sugar is the generalized name for sweet, short-chain, soluble carbohydrates, many of which are used in food. They are carbohydrates, composed of carbon, hydrogen, and oxygen. There are various types of sugar derived from different sources. Simple sugars are called monosaccharides and include glucose (also known as dextrose), fructose and galactose. The table or granulated sugar most customarily used as food is sucrose, a disaccharide. (In the body, sucrose hydrolyses into fructose and glucose.) Other disaccharides include maltose and lactose. Longer chains of sugars are called oligosaccharides. Chemically-different substances may also have a sweet taste, but are not classified as sugars. Some are used as lower-calorie food substitutes for sugar described as artificial sweeteners.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/powderedsugar.jpg",
          OrgPrice: '11',
          Price: '11',
          IsNew: true
        }, {
          Id: "15",
          Title: "Organic Sugar",
          Category: "Pantry",
          SubCategory: "Sugar",
          Manufacturer: "Sweet Home Alabama",
          Contents: "Sugar from sugar cane",
          Description: "Sugar is the generalized name for sweet, short-chain, soluble carbohydrates, many of which are used in food. They are carbohydrates, composed of carbon, hydrogen, and oxygen. There are various types of sugar derived from different sources. Simple sugars are called monosaccharides and include glucose (also known as dextrose), fructose and galactose. The table or granulated sugar most customarily used as food is sucrose, a disaccharide. (In the body, sucrose hydrolyses into fructose and glucose.) Other disaccharides include maltose and lactose. Longer chains of sugars are called oligosaccharides. Chemically-different substances may also have a sweet taste, but are not classified as sugars. Some are used as lower-calorie food substitutes for sugar described as artificial sweeteners.",
          Organic: true,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/sugar.jpg",
          OrgPrice: '14',
          Price: '4'
      }, {
          Id: "16",
          Title: "Oatmeal",
          Category: "Pantry",
          SubCategory: "Grains",
          Manufacturer: "Grinders inc",
          Contents: "Ground oats",
          Description: "Oatmeal is oat groats (i.e. grains) that have been ground, steel-cut, crushed, or rolled. Ground oats are also called 'white oats'. The term 'oatmeal' is also used in the U.S. and parts of Canada to mean oat porridge.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/oatmeal.jpg",
          OrgPrice: '12',
          Price: '12'
        },{
        Id: "17",
          Title: "Orange",
          Category: "Fruit",
          SubCategory: "Citrus",
          Manufacturer: "Fruits n Veggies",
          Contents: "Orange",
          Description: "The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus x sinensis in the family Rutaceae.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/orange.jpg",
          OrgPrice: '5',
          Price: '5'
        },{
        Id: "18",
          Title: "Yoghurt",
          Category: "Dairy",
          SubCategory: "Yoghurt",
          Manufacturer: "Early",
          Contents: "Sour milk with bacteria",
          Description: "Yogurt, yoghurt, or yoghourt (from Turkish: yogurt; other spellings listed below) is a food produced by bacterial fermentation of milk. The bacteria used to make yogurt are known as \"yogurt cultures\". Fermentation of lactose by these bacteria produces lactic acid, which acts on milk protein to give yogurt its texture and characteristic tang. Worldwide, cow's milk, the protein of which is mainly casein, is most commonly used to make yogurt. Milk from water buffalo, goats, ewes, mares, camels, and yaks, however, is also used to produce yogurt in various parts of the world.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/yoghurt.jpg",
          OrgPrice: '14',
          Price: '14'
        },{
        Id: "19",
          Title: "Syrup",
          Category: "Pantry",
          SubCategory: "Sugar",
          Manufacturer: "Sweet Home Alabama",
          Contents: "Syrup",
          Description: "In cooking, a syrup or sirup is a condiment that is a thick, viscous liquid consisting primarily of a solution of sugar in water, containing a large amount of dissolved sugars but showing little tendency to deposit crystals. Its consistency is similar to that of molasses. The viscosity arises from the multiple hydrogen bonds between the dissolved sugar, which has many hydroxyl (OH) groups, and the water. The most popular brand of syrup in the United States, Aunt Jemima, has been prominent in pop culture, with one episode of the tv show South Park giving it a key role.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/syrup.jpg",
          OrgPrice: '24',
          Price: '24'
        },{
        Id: "20",
          Title: "Maple Syrup",
          Category: "Pantry",
          SubCategory: "Sugar",
          Manufacturer: "Ootstanding, Ey?",
          Contents: "Syrup",
          Description: "Maple syrup is a syrup usually made from the xylem sap of sugar maple, red maple, or black maple trees, although it can also be made from other maple species. In cold climates, these trees store starch in their trunks and roots before the winter; the starch is then converted to sugar that rises in the sap in the spring. Maple trees can be tapped by boring holes into their trunks and collecting the exuded sap. The sap is processed by heating to evaporate much of the water, leaving the concentrated syrup.",
          Organic: true,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/maplesyrup.jpg",
          OrgPrice: '34',
          Price: '34'
        },{
        Id: "21",
          Title: "Coffee",
          Category: "Pantry",
          SubCategory: "Coffe and Tea",
          Manufacturer: "Dipton",
          Contents: "Ground coffee",
          Description: "Coffee is a brewed drink prepared from roasted coffee beans, which are the seeds of berries from the Coffea plant. Coffee plants are cultivated in over 70 countries, primarily in the equatorial regions of the Americas, Southeast Asia, India and Africa. The two most commonly grown are the highly regarded arabica, and the less sophisticated but stronger and more hardy robusta. The latter is resistant to the coffee leaf rust, Hemileia vastatrix, but has a more bitter taste. Once ripe, coffee beans are picked, processed, and dried. Green (unroasted) coffee beans are one of the most traded agricultural commodities in the world. Once traded, the beans are roasted to varying degrees, depending on the desired flavor, before being ground and brewed to create coffee.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/coffee.jpg",
          Price: '36'
        }, {
          Id: "22",
          Title: "Mutton steak",
          Category: "Meat",
          SubCategory: "Mutton",
          Manufacturer: "MeatNStuff",
          Contents: "Meat from lamb",
          Description: "Lamb, hogget, and mutton (UK, India, South Africa, Canada, New Zealand and Australia) are terms for the meat of domestic sheep (species Ovis aries) at different ages.",
          Organic: true,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/mutton.jpg",
          Price: '6'
      }, {
          Id: "23",
          Title: "Beer",
          Category: "Refreshments",
          SubCategory: "Drinks",
          Manufacturer: "Charles Mountain",
          Contents: "Malt, hops, yeast and water",
          Description: "Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grains, most commonly malted barley and malted wheat. Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The brewing process causes a natural carbonation effect, although forced carbonation is also used. The preparation of beer is called brewing.",
          Organic: false,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/beer.jpg",
          OrgPrice: '16',
          Price: '16'
        },{
          Id: "24",
          Title: "Organic Beer",
          Category: "Refreshments",
          SubCategory: "Drinks",
          Manufacturer: "Charles Mountain",
          Contents: "Malt, hops, yeast and water",
          Description: "Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar. The starch and saccharification enzymes are often derived from malted cereal grains, most commonly malted barley and malted wheat. Most beer is also flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as herbs or fruit may occasionally be included. The brewing process causes a natural carbonation effect, although forced carbonation is also used. The preparation of beer is called brewing.",
          Organic: true,
          ImageUrl: "http://www.loop54.com/hubfs/demo_images/organicbeer.jpg",
          OrgPrice: '19',
          Price: '19',
          IsNew: true
        }
      ]);

  return (
    <Container>
      <Header/>
      <Favorites nav={navigation} favorites={favorites}/> 
      <BestPrices products={products}/>
    </Container>
);
}


export default Home