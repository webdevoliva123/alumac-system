import React, { useState } from 'react'
import '../cssFiles/subscribe.css'


const Subscribe = ({data}) => {

    const [getUserEmailId, setgetUserEmailId] = useState('');

    let emailId = (event) => {
        let data = event.target.value;
        setgetUserEmailId(data);
    }

    let submitButton = async (event) => {
        event.preventDefault();
        try{

            if(getUserEmailId){
                let res = await fetch(`https://alumac-system-company-databse-default-rtdb.firebaseio.com/subscriberEmailId.json`,{
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json",
                    },
                    body : JSON.stringify({
                        setEmailId : getUserEmailId,
                    })
                })

                if(res){
                    alert('Thank you for subscribing')
                    setgetUserEmailId('')
                }

            }else{
                alert('PLEASE ENTER YOUR EMAIL ID');
            }

        }
        catch(error){
            console.log('Opps Pls Again later',error);
        }
    } 
    return (
        <>
            <div className="subscribe-container">
                <h1 className='subscribe-container__heading'>Subscribe To Get Discount Offers</h1>
                <p className='subscribe-container__subDec'>{data}</p>
                <div className="subscribe-container__inputBx">
                        <form onSubmit={submitButton} method='POST'>
                            <input type="email" placeholder='Enter Your Email.' autoComplete='off' onChange={emailId} value={getUserEmailId} />
                            <button type='submit' className='subscribe'>Subscribe</button>
                        </form>
                </div>
            </div>
        </>
    )
}

export default Subscribe
