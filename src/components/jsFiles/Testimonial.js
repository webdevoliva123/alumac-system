import React from 'react'
import '../cssFiles/testiomnialCard.css'
import CustomButton from './CustomButton'
import TestiomnialCard from './TestiomnialCard'
const Testimonial = ({data,clientKey}) => {
    return (
        <>
          <div className="testiomnialCard-container">
            {
                data.map((e,i) => {
                  if(i < clientKey){
                    return(
                      <TestiomnialCard Img={e.hosImg} Name={e.hosName} city={e.hosCity} dec={e.hosDec} index={i}/>
                      )
                  }
                })
            }  
          </div>
        </>
    )
}

export default Testimonial
