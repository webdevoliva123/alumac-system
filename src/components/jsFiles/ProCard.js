import React from 'react'
import '../cssFiles/products.css'

const ProCard = ({proId,proName,proPrice,proDec,proImg,index}) => {
    return (
        <>
           <div className="proCardBx">
                <div className="proCardBx-imgBx">
                    <img src={proImg} alt={`Product ${index}`} />
                </div>
                <div className="proCardBx-button">
                    <a href="/contact"><button>Contact Us</button></a>
                </div>
                <div className="proCardBx-contentBx">
                    <span className='proCardBx-contentBx__proId'>{proId}</span>
                    <a  className='proCardBx-contentBx__proName'>{proName}</a>
                    <p className='proCardBx-contentBx__proDec'>{proDec.slice(0,100)}</p>
                </div>
           </div>
        </>
    )
}

export default ProCard
