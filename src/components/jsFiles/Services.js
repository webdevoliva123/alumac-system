import React from 'react'
import '../cssFiles/services.css'
import Service from './Service'

const Services = ({details}) => {
    return (
        <>
          <div className="Services">
              {
                  details.map((e,i) => {
                        return(
                            <>
                                <Service key={i} img={e.img} title={e.title} description={e.description} index={i}/>
                            </>
                        )
                  })
              }
            </div>  
        </>
    )
}

export default Services
