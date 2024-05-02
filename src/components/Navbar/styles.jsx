import { FaShoppingCart } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import styled from "styled-components"

export const NavWrapper = styled.nav`
  font-family: "Caesar Dressing", system-ui;
  font-style: normal;
  font-weight: 400;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 0 2.2rem;
  background-color: #121212;
  color: #fafafa;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
`

export const NavLogo = styled.h1`
  font-size: 3.8rem;
  padding: 1.2rem .8rem;
  text-align: center;
  `

export const NavbarLinks = styled.div`
  font-size: 2.2rem;
  `

export const NavbarLink = styled(NavLink)`
  color: #f1f1f1;
  text-decoration: none;  
  margin: 0 1.2rem;
  padding-bottom: .1rem;
  transition: ease-in-out .2s;
  &:hover{
    padding-bottom: .3rem;
    border-bottom: 2px solid #f1f1f1;
  }
  &.active{
    border-bottom: 2px solid #f1f1f1;
  }
`


export const CartWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 2rem;
`

export const Cart = styled(FaShoppingCart)`
  cursor: pointer;
  color: #f1f1f1;
  transition: color .2s ease-in;
  &:hover{
    color: #fff;
  }
`

export const CartLink = styled(Link)`
  position: relative;
`

export const CartQuant = styled.span`
  position: absolute;
  right: -1rem;
  top: -.5rem;
  background-color: blue;
  color: #fff;
  border-radius: 50%;
  font-size: 1.4rem;
  text-align: center;
  width: 2rem;
  height: 2rem;
  font-family: "Kanit", sans-serif;
`