import React from 'react'
import Navbar from '../Navbar/Navbar'
import styled from 'styled-components'
import ProductsList from './ProductsList'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const [cart, setCart] = useOutletContext();

  return (
      <ProductsContainer>
        <ProductsTitle>Shop</ProductsTitle>
        <ProductsList cart={cart} setCart={setCart} />
      </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  background-color: #f4f4f4;
  color: #000;
  padding: 1.2rem 4rem;
`

const ProductsTitle = styled.h2`
  font-size: 4rem;
  margin: 2rem 0;
`

export default Products