import React from 'react'
import '../cssFiles/aboutUs.css'
const AboutUs = ({data}) => {
    return (
        <>
            <div className="aboutUs-Container">
                <div className="leftBx">
                    <p>{data.aboutDataPara1}</p>
                </div>
                <div className="rightBx">
                    <div className="imgBx">
                        <img src={data.owner} alt="owner" />
                    </div>
                    <h3>{data.ownerName}</h3>
                </div>
            </div>
        </>
    )
}

export default AboutUs
