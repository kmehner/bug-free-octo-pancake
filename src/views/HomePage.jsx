import React from 'react'
import ProductCatalog from '../components/ProductCatalog'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'

const HomePage = () => {
  const cartCount = useSelector((state) => state.cart.totalItems)

  return (
    <Container>
      <h1>Welcome to the Homepage</h1>
      <p>Your current cart count is: {cartCount}</p>

      <ProductCatalog />
    </Container>
  )
}

export default HomePage