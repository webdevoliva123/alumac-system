import React from 'react'
import '../cssFiles/testiomnialCard.css'
const TestiomnialCard = ({Img,Name,city,dec,index}) => {
    return (
        <>
            <div className="testiomnialCard">
                <div className="testiomnialCard-imgBx">
                    <img src={Img} alt={`card ${index}`} />
                </div>
                <h3 className='testiomnialCard-hosName'>{Name}</h3>
                <p className='testiomnialCard-cityName'>{city}</p>
                <p className='testiomnialCard-dec'>{dec}</p>
            </div>
        </>
    )
}

export default TestiomnialCard
