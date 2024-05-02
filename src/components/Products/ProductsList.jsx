import React, { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook';
import styled from 'styled-components'
import { ImageContainer, ListContainer, ListItem, ItemImage, ItemDetails, ItemTitle, ItemPrice, QuantityContainer, QuantityButton, QuantityDisplay, ItemAdd } from './styles';

const ProductsList = ({cart, setCart}) => {
  const {isLoading, data, error} = useFetch('https://fakestoreapi.com/products');

  const addToCart = (product) => {
    const {id, title, image, price} = product;
    let res = cart.filter(item => item.id === id);
    if(res[0]){
      res[0].quantity++;
      setCart([...cart]);
    }else{  
      setCart([...cart, {id, price, title, image, quantity: 1}]);
    }
  }

  const changeQuantity = (id, val) => {
    let el = cart.filter(item => item.id === id)[0];
    el.quantity += val;
    setCart([...cart])
    if(el.quantity <= 0){
      let filteredCart = cart.filter(item => item.id !== item.id);
      setCart([...filteredCart]);
    }
  }

  return (
    <ListContainer>
      {isLoading ? "Loading..." : data.map(item => {
        let inCart = cart.filter(el => el.id === item.id)[0];
        return <ListItem key={item.id}>
          <ImageContainer>
           <ItemImage src={item.image} />
          </ImageContainer>
          <ItemDetails>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemPrice>${item.price}</ItemPrice>
          </ItemDetails>
          {inCart ? 
          <QuantityContainer>
            <QuantityButton onClick={() => changeQuantity(item.id, -1)}>-</QuantityButton>
            <QuantityDisplay>{inCart.quantity}</QuantityDisplay>
            <QuantityButton onClick={() => changeQuantity(item.id, 1)}>+</QuantityButton>
          </QuantityContainer>
          : 
           <ItemAdd onClick={() => {
            addToCart(item);
          }}>Add to cart</ItemAdd>
          }
        </ListItem>
      })}
    </ListContainer>
  )
}



export default ProductsList