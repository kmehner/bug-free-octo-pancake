import React from 'react'
import { Button, Container, ListGroupItem } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem, removeItem } from '../redux/cartSlice'

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const handleAddItem = (id) => {
    dispatch(addItem({ id }))
  }

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }))
  }

  const handleCheckout = () => {
    dispatch(handleCheckout())
  }

  return (
    <Container>
      <h2>Shopping Cart</h2>

      {/* Map out our cart items */}
      {Object.entries(cart.items).map(([id, quantity], idx) => (
        <ListGroupItem key={idx}>
          <span>{id} - Quantity: {quantity}</span>
          <div>
            <Button variant="success" onClick={() => handleAddItem(id)}>+</Button>
            <Button variant="danger" onClick={() => handleRemoveItem(id)}>-</Button>
          </div>
        </ListGroupItem>
      ))}

      {/* List our total items */}
      <p>Total Items: {cart.totalItems}</p>

      {/* Checkout */}
      <Button variant='primary' onClick={() => handleCheckout}>Checkout</Button>

      <Link to={'/'}>
        <Button>Return to home</Button>
      </Link>

    </Container>
  )
}

export default ShoppingCart