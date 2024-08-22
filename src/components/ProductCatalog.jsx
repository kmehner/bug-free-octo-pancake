import React from 'react'
import products from "../data/products"
import { Container } from 'react-bootstrap'

const ProductCatalog = () => {
  return (
    <Container>
        <h2>Product Catalog</h2>
        <div>
          {products.map((product) => (
            <p>Hello</p>
          ))}
        </div>
    </Container>
  )
}

export default ProductCatalog