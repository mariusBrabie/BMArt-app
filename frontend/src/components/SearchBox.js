import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = e => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} className='search-form' inline>
      <Form.Control
        type='text'
        name='search-box'
        onChange={e => setKeyword(e.target.value)}
        placeholder='Cauta produsul dorit...'
      ></Form.Control>
      <Button type='submit' variant='outline-secondary'>
        Cauta
      </Button>
    </Form>
  )
}

export default SearchBox
