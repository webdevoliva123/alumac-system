import React from 'react'
import '../../components/cssFiles/chatUs.css'
import whatsUpIcon from '../../img/whatsapp.png'

const ChatUs = () => {
    const redirectToWhatsApp = () => {
        const phoneNumber = '9967759858'; // Replace with the desired phone number
    
        // Redirect to the WhatsApp chat
        window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
      };
  return (
    <div className='chatUsContainer'>
        <img src={whatsUpIcon} alt="Chat With Us" className='chatUsIcon' onClick={() => redirectToWhatsApp()}/>
    </div>
  )
}

export default ChatUs