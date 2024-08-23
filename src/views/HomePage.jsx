import React from 'react'
import ProductCatalog from '../components/ProductCatalog'
import { useSelector } from 'react-redux'
import { Button, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const cartCount = useSelector((state) => state.cart.totalItems)

  return (
    <Container>
      <h1>Welcome to the Homepage</h1>
      <p>Your current cart count is: {cartCount}</p>

      <Link to={'/cart'}>
        <Button>Go to cart</Button>
      </Link>

      <ProductCatalog />

    </Container>
  )
}

export default HomePage