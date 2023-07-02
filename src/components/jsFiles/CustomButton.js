import React from 'react'
import '../cssFiles/customButton.css'

const CustomButton = ({Data,link,border}) => {
    return (
        <>
            <a href={link}>
                <button className='CustomButtom' id={border}>{Data}</button>
            </a>
        </>
    )
}

export default CustomButton
