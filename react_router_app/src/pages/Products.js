import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
  return (
    <div>
      <h1>
        Products Page
      </h1>
      <ul>
        <li><Link to="/products/books">Book</Link></li>
        <li><Link to="/products/carpet">carpet</Link></li>
        <li><Link to="/products/books">p3</Link></li>
      
      </ul>
    </div>
  )
}

export default Products
