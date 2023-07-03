import React from 'react'
import Footer from '../components/jsFiles/Footer'
import Navbar from '../components/jsFiles/Navbar'
import Data from '../Data/Data'
import Product from '../components/jsFiles/Product'
import Heading from '../components/jsFiles/Heading'
import Category from '../components/jsFiles/Category'
const MainProducts = ({producShow}) => {
    return (
        <div style={{padding:"40px 0"}}>
            <Heading heading={`Our`} headSpan={`Product`} />
            <Category />
            <Product proData={Data.product} prokey={producShow}/>
            <Footer data={Data.footer}/>
        </div>
    )
}

export default MainProducts
