import React from 'react'
import '../cssFiles/footer.css'
const PreFooter = ({name,link}) => {
    return (
        <>
            <a href={link}>{name}</a>
        </>
    )
}

export default PreFooter
