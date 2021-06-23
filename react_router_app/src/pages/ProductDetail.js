import React from 'react'
import {useParams} from "react-router-dom"

const ProductDeatil = () => {

  const param = useParams()

  return (
      <div>
      <h1>Product Deatils</h1>
      <p>{param.productId}</p>
    </div>
  )
}

export default ProductDeatil
