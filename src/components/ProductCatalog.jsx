import React from 'react'
import products from "../data/products"
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'

const ProductCatalog = () => {
  const dispatch = useDispatch()

  const handleAddToCart = (id) => {
    dispatch(addItem({id}))
  }


  return (
    <Container>
        <h2>Product Catalog</h2>
        <div>
          {products.map((product, idx) => (
            <Card key={idx} style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant='primary' onClick={() => handleAddToCart(product.id)}>Add to cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
    </Container>
  )
  
}

export default ProductCatalog