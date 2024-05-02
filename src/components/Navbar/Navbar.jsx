import { Link } from 'react-router-dom'
import { Cart, CartLink, CartQuant, CartWrapper, NavLogo, NavWrapper, NavbarLink, NavbarLinks } from './styles';


const Navbar = ({cart}) => {


  return (
    <NavWrapper>
      <NavbarLinks>
        <NavbarLink to="/" className={({isActive, isPending}) => 
          isPending ? "pending" : isActive ? "active" : ""
        }>Home</NavbarLink>
        <NavbarLink to="/products">Products</NavbarLink>
      </NavbarLinks>
      <NavLogo>Nordic World</NavLogo>
      <CartWrapper>
        <CartLink to="/cart">
         <Cart size={32}> 
         </Cart>
         {cart.length > 0 ?  <CartQuant>{cart.length }</CartQuant> : ""}
        </CartLink>
      </CartWrapper>
    </NavWrapper>
  )
}




export default Navbar