import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const ProductScreen = ({ match }) => {
  let { id } = useParams()
  let product = products.find(p => {return p._id === id})


  return (
    <>
    <div>ProductScreen</div>
    <Link to='/' className='btn btn-dark my-3'>Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} />
      </Col>
      <Col med={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h2>{product.name}</h2>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <div className='d-grid gap-2'>
              <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                Add To Cart
              </Button>
              </div>
            </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen