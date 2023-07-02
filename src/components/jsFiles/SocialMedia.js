import React from 'react'
import '../cssFiles/socialMedia.css'

const SocialMedia = ({align}) => {
    return (
        <>
          <div className="socialMedia__Link" id={align}>
            <a href=""><ion-icon name="logo-facebook"></ion-icon></a>
            <a href=""><ion-icon name="logo-instagram"></ion-icon></a>
            <a href=""><ion-icon name="logo-twitter"></ion-icon></a>
          </div>  
        </>
    )
}

export default SocialMedia
