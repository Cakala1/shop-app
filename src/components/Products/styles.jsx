import styled from "styled-components"

export const ListContainer = styled.div`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 3rem;
`

export const ListItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  min-height: 20rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 5rem 1.6rem;

  &:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const ItemImage = styled.img`
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: cover;
    height: 15rem;
    max-width: 100%;
`

export const ItemDetails = styled.div`
  margin-top: 3.5rem;
  min-height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ItemTitle = styled.h4`
  font-size: 1.7rem;
  font-weight: 400;
  text-align: center;
`

export const ItemPrice = styled.h5`
  font-size: 1.6rem;
  text-align: center;
  margin: .4rem 0;
`

export const ItemAdd = styled.button`
  background: #118a7e;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  text-transform: uppercase;
  padding: 1rem 1.2rem;
  border-radius: 2rem;
  margin: 0 auto;
  cursor: pointer;
`

export const QuantityContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const QuantityButton = styled.button`
  height: 4rem;
  width: 4rem;
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #118a7e;
  border: none;
  border-radius: 1rem;
`

export const QuantityDisplay = styled.div`
  font-size: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  height: 2rem;
`