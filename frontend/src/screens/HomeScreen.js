import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Button } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import Paginate from '../components/Paginate'
import TopProducts from '../components/TopProducts'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1
  const category = match.params.category

  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber, category))
  }, [dispatch, keyword, pageNumber, category])

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {!keyword && !category ? (
            <TopProducts />
          ) : (
            <>
              {products.length === 0 ? (
                <h5 className='mt-3 text-center'>Niciun rezultat</h5>
              ) : (
                <h5 className='mt-5'>{null}</h5>
              )}
              <Link to='/'>
                <Button variant='secondary'>Inapoi</Button>
              </Link>
            </>
          )}
          <Row>
            {products.map(product => {
              return (
                <Col
                  sm={10}
                  md={5}
                  lg={3}
                  key={product._id}
                  className='products-container'
                >
                  <Product product={product} />
                </Col>
              )
            })}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
            category={category ? category : ''}
          />
        </>
      )}
    </>
  )
}

export default HomeScreen
