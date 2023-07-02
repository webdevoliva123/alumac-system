import React from 'react'
import '../cssFiles/products.css'
import ProCard from './ProCard'

const Product = ({proData,prokey}) => {
    return (
        <>
          <div className="proContainer">
              {
                proData.map((e,i) => {
                    if(i < prokey){
                      return(
                        <>
                            <ProCard proId={e.id} proName={e.proName} proPrice={e.proPrice} proDec={e.proDec} proImg={e.proImg} path={e.onHomePage} index={i} />
                        </>
                    )
                    }
                })
              }
          </div>
        </>
    )
}

export default Product
