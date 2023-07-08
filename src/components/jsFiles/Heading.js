import React from 'react'
import '../cssFiles/heading.css'
const Heading = ({heading,headSpan,isActive}) => {
    return (
        <>
          <h1 className={`heading ${isActive && 'active'}`}>{heading} <span>{headSpan}</span></h1>  
        </>
    )
}

export default Heading
