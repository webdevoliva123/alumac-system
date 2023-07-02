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
                    <a href={`/product/${proId}`} className='proCardBx-contentBx__proName'>{proName.length > 15 ? `${proName.slice(0,15)}...` : proName}</a>
                    <p className='proCardBx-contentBx__proDec'>{proDec.length > 100 ? `${proDec.slice(0,100)}...` : proDec}</p>
                </div>
           </div>
        </>
    )
}

export default ProCard
