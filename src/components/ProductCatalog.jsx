import React, { useEffect } from 'react'
// import products from "../data/products"
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import { fetchProducts } from '../redux/productSlice'

const ProductCatalog = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.items)
  const productsStatus = useSelector((state) => state.products.status)
  const productsError = useSelector((state) => state.products.error)

  useEffect(() => {
    if (productsStatus === "idle"){
      dispatch(fetchProducts())
    }
  }, [productsStatus, dispatch])

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
                 {/* w-100 sets the width to 100% of the parent element which is the card */}
                <img className='w-100' src={product.image} />
                <Card.Title>{product.title}</Card.Title>
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