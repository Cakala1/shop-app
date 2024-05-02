import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import styled from "styled-components"

const Cart = () => {
  const [cart, setCart] = useOutletContext();
  const [sum, setSum] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    let t_sum = 0;
    cart.map(item => {
      t_sum += item.price * item.quantity;
    })
    setSum(t_sum.toFixed(2));
  }, [cart])

  const checkout = () => {
    setCart([]);
    navigate("/");
  }

  const deleteItem = (id) => {
    let filtered = cart.filter(item => item.id !== id);
    setCart([...filtered]);
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
    <CartContainer>
      {cart.length > 0 ? 
        <CartGrid>
          <CartMain>
            <CartTitle>Your shopping cart:</CartTitle>
            <CartList>
              {cart.map(item => {
                return(
                    <CartListItem key={item.id}>
                      <ItemImageContainer>
                        <ItemImage src={item.image} alt={item.title} />
                      </ItemImageContainer>
                      <ItemContent>
                        <ItemTitle>{item.title}</ItemTitle>
                        <ItemDetails>
                          <QuantityContainer>
                            <QuantityButton onClick={() => changeQuantity(item.id, -1)}>-</QuantityButton>
                            <QuantityDisplay>{item.quantity}</QuantityDisplay>
                            <QuantityButton onClick={() => changeQuantity(item.id, 1)}>+</QuantityButton>
                          </QuantityContainer>
                          <ItemPrice>$ {(item.price * item.quantity).toFixed(2)}</ItemPrice>
                          <ItemDelete onClick={() => deleteItem(item.id)}>Remove</ItemDelete>
                        </ItemDetails>
                      </ItemContent>
                    </CartListItem>
                )
              })}
            </CartList>
          </CartMain>
          <CartCheckout>
            <CartTitle>Total sum: $ {sum}</CartTitle>
            <CheckoutButton onClick={() => checkout()}>Proceed to checkout</CheckoutButton>
          </CartCheckout>
        </CartGrid>
       : <EmptyCart />}
    </CartContainer>
  )
}

const EmptyCart = () => {
  return (
    <CartDisplay>
        <CartTitle>Your cart is empty!</CartTitle>
        <CartLink to="/products">Shop now</CartLink>
    </CartDisplay>
  )
}

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10rem;
`

const CartMain = styled.div`

`

const CartList = styled.div`
  
`

const CartCheckout = styled.div`
  background-color: #fff;
  max-height: 20rem;
  padding: 1.2rem 2rem;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const CheckoutButton = styled.button`
  background-color: #008200;
  border: none;
  color: #fff;
  font-size: 2.2rem;
  padding: 1rem 1.5rem;
  width: 50%;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  transition: .4s ease;
  &:hover{
    background-color: #119311;
  }
`

const ItemContent = styled.div`
  margin-left: 3rem;
  display: flex;
  flex-direction: column;
`

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: #222;
`

const ItemDetails = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-between;
`

const ItemImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ItemImage = styled.img`
  display: block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  object-fit: cover;
  height: 10rem;
  max-width: 100%;
`

const CartListItem = styled.div`
  background-color: #fff;
  padding: 1.2rem 3rem;
  display: grid;
  grid-template-columns: 1fr 4fr;
  margin: 1.5rem 0;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); 
`

const CartContainer = styled.div`
  margin: 4rem 2rem ;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CartDisplay = styled.div`
  background-color: #222;
  color: #fff;
  flex: 1;
  max-width: 60rem;
  min-height: 30rem;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;

`

const CartTitle = styled.h2`
  font-size: 3.6rem;
  text-align: center;
  margin: 0 0 5rem;
`

const CartLink = styled(Link)`
  background-color: #f2f2f2;
  color: #222;
  text-decoration: none;
  font-size: 2.6rem;
  padding: .4rem 2.5rem;
  border-radius: 1rem;
  transition: .2s ease-in;
  &:hover{
    background-color: #cecece;
  }
`

const QuantityContainer = styled.div`
  display: flex;
`

const QuantityButton = styled.button`
  font-size: 2rem;
  padding: 0 2rem;
`

const QuantityDisplay = styled.div`
  font-size: 2.6rem;
  padding: 0 1rem;
  background-color: #dbdbdb;
`

const ItemPrice = styled.h5`
  font-size: 2rem;
`

const ItemDelete = styled.button`
  color: rgba(199, 0, 0, 1);
  padding: .5rem 1rem;
  background-color: #fff;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: .2s ease;
  border-radius: .5rem;

  &:hover{
    background-color: rgba(199, 0, 0);
    color: #fff;
  }
`

export default Cart