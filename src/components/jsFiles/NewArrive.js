import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import '../cssFiles/newArrive.css'

const NewArrive = ({data}) => {
    return (
        <>
            <Carousel interval={2000} controls={false}  className='newArriveContainer'>
            {data.map((item,index)=>(
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-100"
                    id="bannerImage"
                    src={item}
                    alt={`${index} banner`}
                    />
                </Carousel.Item>
            ))}
            </Carousel>
        </>
    )
}

export default NewArrive
