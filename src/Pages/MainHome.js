import React from 'react'
import CustomButton from '../components/jsFiles/CustomButton';
import Footer from '../components/jsFiles/Footer';
import Heading from '../components/jsFiles/Heading';
import Home from '../components/jsFiles/Home';
import Navbar from '../components/jsFiles/Navbar';
import NewArrive from '../components/jsFiles/NewArrive';
import Product from '../components/jsFiles/Product';
import Services from '../components/jsFiles/Services';
import Subscribe from '../components/jsFiles/Subscribe';
import Testimonial from '../components/jsFiles/Testimonial';
import Data from '../Data/Data'
import './style.css'

const MainHome = ({producShow,clientShow}) => {
    return (
        <>
         <Home key={Data.homeData.key} details={Data.homeData} />
         <Heading heading={`Our Services`} headSpan={null} />
         <Services key={Data.serviceData.values} details={Data.serviceData} />
         <NewArrive   data={Data.newArrivel}/>
         <Heading heading={`Our`} headSpan={` Products`}/>
         <Product proData={Data.product} prokey={producShow}/>
         <div className="div">
            <CustomButton Data={'View More'} link={'product'}/>
         </div>
         <div style={{background:"#f1f1f1"}}>
         <Heading heading={`Our`} headSpan={` Client`}/>
         <Testimonial data={Data.clientData} clientKey={clientShow}/>
         <div className="div">
            <CustomButton Data={'View More'} link={'client'}/>
         </div>
         </div>
        </>
    )
}

export default MainHome
