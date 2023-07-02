import React from 'react'
import '../cssFiles/footer.css'
import PreFooter from './PreFooter'
import CustomButton from './CustomButton'
import PreFooter2 from './PreFooter2'
import PreFooter3 from './PreFooter3'

const Footer = ({data}) => {
    return (
        <>
            <div className="preFooter1Container">
                <div className="preFooter1">
                    <div>
                        <p>SUPPORT</p>
                        {
                            data.support.map((e,i) => {
                                return (
                                    <PreFooter key={i} name={e.name} link={e.url} /> 
                                )
                            })
                        }
                    </div>
                    <div>
                        <p>SHOP AND LEARN</p>
                        {
                            data.shopAndLearn.map((e,i) => {
                                return (
                                    <PreFooter key={i} name={e.name} link={e.url} /> 
                                )
                            })
                        }
                    </div>
                    <div>
                        <p>RETAIL STORE</p>
                        {
                            data.retailStore.map((e,i) => {
                                return (
                                    <PreFooter key={i} name={e.name} link={e.url} /> 
                                )
                            })
                        }
                    </div>
                    <div>
                        <p>ABOUT US</p>
                        {
                            data.aboutUS.map((e,i) => {
                                return (
                                    <PreFooter key={i} name={e.name} link={e.url} /> 
                                )
                            })
                        }
                    </div>
                    <div>
                        <p>CONTACT US</p>
                        {
                            data.contactUs.map((e,i) => {
                                return (
                                    <PreFooter key={i} name={e.name} link={e.url} /> 
                                )
                            })
                        }
                    </div>
                    <div>
                    <span className='conatact-span'>Contact With us. <br /> 
                        (24/7 customer services)</span>
                        <div className="contactButton">
                            <CustomButton Data={'Contact us'} link={`contact`} border={'border'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="preFooter3Container">
                <PreFooter3 />
            </div>
            <div className="preFooter2Container">
                <PreFooter2 />
            </div>  
        </>
    )
}

export default Footer
