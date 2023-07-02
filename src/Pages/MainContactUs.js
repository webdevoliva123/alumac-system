import React from 'react'
import Footer from '../components/jsFiles/Footer'
import Navbar from '../components/jsFiles/Navbar'
import Heading from '../components/jsFiles/Heading'
import Data from '../Data/Data'

const MainContactUs = () => {
    return (
        <div style={{padding:"40px 0"}}>
            <Heading heading={`Conatct `} headSpan={`Us`}/>
            <div className="contact-container">
                <div className="box left">
                    <div className="content">
                        <h3>Name : <span>Amit Yadav</span></h3>
                        <h3>Phone No. : <span>+91 987654321 / +91 987654321</span></h3>
                        <h3>Whatsapp No. : <span>+91 987654321</span></h3>
                        <h3>Address : <span>Hajuri Dargha, Noori Road, Wagle Estate, Thane West</span></h3>
                    </div>
                </div>
                <div className="box right">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7410863374776!2d72.97552481490696!3d19.206507752848253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9391cdd3acf%3A0x10aff78db03b29d1!2sCafe%20India%20Restaurant!5e0!3m2!1sen!2sin!4v1642573576554!5m2!1sen!2sin"
                 width="550"
                 height="450"
                 style={{ boxShadow:'0 10px 20px rgba(0,0,0,0.2)',marginRight:'6vmax' }}
                 allowfullscreen=""
                 loading="lazy">

                 </iframe>
                </div>
            </div>
            <Footer data={Data.footer}/>
        </div>
    )
}

export default MainContactUs
