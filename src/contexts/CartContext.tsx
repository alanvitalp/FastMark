import React, {createContext, useState} from 'react';
import { getProduct } from '../services/productsServices';

export const CartContext = createContext({} as ContextProviderProps);

type ContextProviderProps = {
    items: any;
    setItems: any
    getItemsCount: any
    addItemToCart: any;
    getTotalPrice: any;
};


export function CartProvider(props: any) {
  const [items, setItems] = useState<any[]>([]);

  function addItemToCart(id: any) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: Number(product?.Price)
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += Number(product?.Price);
            }
            return item;
          });
      }
    });
}
  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}