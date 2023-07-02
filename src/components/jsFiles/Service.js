import React from 'react'
import '../cssFiles/service.css'

const Service = ({index,img,title,description}) => {
    return (
        <>
            <div className="serviceBx">
                  <div className="sreviceBx__ImgBx">
                  <img src={img} alt={`Service Card ${index}`} />
                  </div>
                <div className="serviceBx__content">
                    <h3 className='serviceBx__content-title'>{title}</h3>
                    <p className="serviceBx__content-description">{description}</p>
                  </div>
              </div>
        </>
    )
}

export default Service
