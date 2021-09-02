import React, {createContext, useState} from 'react';
import { getProduct } from '../services/productsServices';

export const CartContext = createContext({} as ContextProviderProps);

type ContextProviderProps = {
    items: any;
    setItems: any
    getItemsCount: any
    addItemToCart: any;
    getTotalPrice: any;
    getItems: any;
    removeFromCart: any;
    removeItemFromCart: any;
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

  function removeItemFromCart(id: any) {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
        return [...prevItems, {
          id,
          qty: 0,
          product,
          totalPrice: Number(product?.Price)
        }];
      }
      else { 
          return prevItems.map((item) => {
              if(item.id == id) {
                if (getItems(id) > 1) {
                  item.qty--;
                  item.totalPrice -= Number(product?.Price);
                } 
              }
              return item;
          });
      }
    });
  }

  function removeFromCart(id: any) {
    const filterItems = items.filter(item => item.product.Id !== id);

    setItems(filterItems)
  }

  function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
    return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  function getItems(id: any) {
    return items.filter(item => item.product.Id === id).reduce((sum, item) => (sum + item.qty), 0);
  }
  

  return (
    <CartContext.Provider 
      value={{getItems, removeFromCart, removeItemFromCart, items, setItems, getItemsCount, addItemToCart, getTotalPrice}}>
      {props.children}
    </CartContext.Provider>
  );
}