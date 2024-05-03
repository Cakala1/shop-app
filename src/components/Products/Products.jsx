import styled from 'styled-components'
import ProductsList from './ProductsList'
import { useOutletContext } from 'react-router-dom'

const Products = () => {
  const [cart, setCart, category, setCategory] = useOutletContext();


  return (
      <ProductsContainer>
        <ProductsTitle>Shop</ProductsTitle>
        <SelectContainer>
          <h4>Category: </h4>
          <ProductSelect onChange={(e) => setCategory(e.target.value)} value={category}>
            <option value="all">All</option>
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </ProductSelect>
        </SelectContainer>
        <ProductsList cart={cart} setCart={setCart} category={category} />
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

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  h4{
    font-size: 2.5rem;
    margin-right: 2rem;
  }
  `

const ProductSelect = styled.select`
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 1.8rem;
  margin-top: .5rem;
  font-weight: 600;
`

export default Products