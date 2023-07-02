import React from 'react'
import '../cssFiles/home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import CustomButton from './CustomButton'
import SocialMedia from './SocialMedia'

  
const Home = ({details}) => {
    return (
        <>
        <div className="home">
            <Carousel className='bannerBx' interval={2000} nextIcon={false} prevIcon={false}>
            {details.map((item,index)=>(
                <Carousel.Item key={item.img}  id="banner" >
                    <img
                    className="d-block w-100 "
                    id="bannerImage"
                    src={item.img}
                    alt={`${index} banner`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
        </div>
        </>
    )
}

export default Home
