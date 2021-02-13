import React from 'react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'

const Rating = ({ value }) => {
  return (
    <div>
      <span className='rating'>
        {value === 0 ? (
          <BsStar />
        ) : value <= 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStarFill />
        )}
      </span>

      <span className='rating'>
        {value <= 1 ? (
          <BsStar />
        ) : value <= 1.5 ? (
          <BsStarHalf />
        ) : (
          <BsStarFill />
        )}
      </span>

      <span className='rating'>
        {value <= 2 ? (
          <BsStar />
        ) : value <= 2.5 ? (
          <BsStarHalf />
        ) : (
          <BsStarFill />
        )}
      </span>

      <span className='rating'>
        {value <= 3 ? (
          <BsStar />
        ) : value <= 3.5 ? (
          <BsStarHalf />
        ) : (
          <BsStarFill />
        )}
      </span>

      <span className='rating'>
        {value <= 4 ? (
          <BsStar />
        ) : value <= 4.5 ? (
          <BsStarHalf />
        ) : (
          <BsStarFill />
        )}
      </span>
    </div>
  )
}

export default Rating
