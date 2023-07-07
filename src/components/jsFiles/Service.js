import React, { useEffect, useState } from 'react'
import '../cssFiles/service.css'
import service1 from '../../img/best-price.png'
import service2 from '../../img/24-hours.png'
import service3 from '../../img/best Quality.png'

const Service = ({index,value,img,title,description}) => {
    const [serviceImage,setServiceImage] = useState()

    const getImage = () => {
        switch(value){
            case 1:
                return setServiceImage(service1)
            case 2:
                return setServiceImage(service2)
            case 3:
                    return setServiceImage(service3)
        }
    }

    useEffect(() => {
        getImage()
    },[value])
    return (
        <>
            <div className="serviceBx">
                  <div className="sreviceBx__ImgBx">
                  <img src={serviceImage} alt={`Service Card ${index}`} />
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
