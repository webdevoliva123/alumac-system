import React from 'react'
import Footer from '../components/jsFiles/Footer'
import Heading from '../components/jsFiles/Heading'
import Navbar from '../components/jsFiles/Navbar'
import './style.css'
import Data from '../Data/Data'
import AboutUs from '../components/jsFiles/AboutUs'
import Services from '../components/jsFiles/Services'

const MainAboutUs = () => {
    return (
        <>
            <Navbar relative={'relative'} web_logo={Data.webLogo}/>
            <div className='companyImg'>
                <img src={Data.aboutUs.companyImg} alt="company Img" />
            </div>
            <Heading heading={`About`} headSpan={'Us'} />
            <AboutUs key={'aboutData'} data={Data.aboutUs}/>
            <Footer data={Data.footer}/>
        </>
    )
}

export default MainAboutUs
