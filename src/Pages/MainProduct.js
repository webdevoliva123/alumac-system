import React from 'react'
import ProductDetail from '../components/jsFiles/ProductDetail'
import Data from '../Data/Data'

const MainProduct = () => {
  return (
    <ProductDetail product={Data.product}/>
  )
}

export default MainProduct