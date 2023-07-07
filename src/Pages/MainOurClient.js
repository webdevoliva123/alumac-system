import React from 'react'
import Footer from '../components/jsFiles/Footer'
import Heading from '../components/jsFiles/Heading'
import Navbar from '../components/jsFiles/Navbar'
import Testimonial from '../components/jsFiles/Testimonial'
import Data from '../Data/Data'

const MainOurClient = ({clientShow}) => {
    return (
        <div style={{padding:"40px 0"}}>
            <Heading heading={`Our`} headSpan={` Client`}/>
            <Testimonial data={Data.clientData} clientKey={clientShow}/>
        </div>
    )
}

export default MainOurClient
