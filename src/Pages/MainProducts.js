import React, { useEffect, useState } from 'react'
import Data from '../Data/Data'
import Product from '../components/jsFiles/Product'
import Heading from '../components/jsFiles/Heading'
import Category from '../components/jsFiles/Category'
import { useSearchParams } from 'react-router-dom'
import { filterProducts } from '../utils/productsUtils'
const MainProducts = ({producShow}) => {
    const [products,setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const cat = searchParams.get('cat')
        // filter products by category
        if(cat){
            setProducts(filterProducts(cat,Data.product))
        }else{
            setProducts(Data.product)
        }
    },[searchParams])
    return (
        <div style={{padding:"40px 0"}}>
            <Heading heading={`Our`} headSpan={`Product`} />
            <Category proData={Data.product} />
            <Product proData={products} prokey={producShow}/>
        </div>
    )
}

export default MainProducts
