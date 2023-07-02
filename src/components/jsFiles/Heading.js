import React from 'react'
import '../cssFiles/heading.css'
const Heading = ({heading,headSpan}) => {
    return (
        <>
          <h1 className='heading'>{heading} <span>{headSpan}</span></h1>  
        </>
    )
}

export default Heading
