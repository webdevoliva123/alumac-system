import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import '../cssFiles/navbar.css'
import Sidebar from './Sidebar';

const Navbar = ({web_logo,relative}) => {
    const [showSidebar,setSidebar] = useState(false);
    const [sticky,setSticky] = useState(false);
    const [isLocationHome,setIsLocationHome] = useState(false);
    let location = useLocation();
    let toggleIcon = (showSidebar != true) ? <ion-icon name="menu-outline"></ion-icon> : <ion-icon name="close-outline" id="closeMenu"></ion-icon>;


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100){
                setSticky(true)
            }else{
                setSticky(false)
            }
        })
    },[window])

    useEffect(() => {
        if(location.pathname === '/' || location.pathname === '/home'){
            setIsLocationHome(true)
        }else{
            setIsLocationHome(false)
        }
      }, [location]);

    console.log(sticky);
    return (
        <>
            <div className={`navbar ${sticky && 'sticky'} ${isLocationHome && 'locationHome'}`} id={relative}>
                <Link to={`/`} className='Link'><a><img src={web_logo} alt="website logo" className="navbar-website__logo"/></a></Link>
                <Link to={`/`} className='Link'><a className="web__logo"><span>Alumac</span> System.</a></Link>
                <div className="navbar__rightBx">
                <Link to={`/aboutUs`} className='Link'><a className='navbar__rightBx-navLinks'>About Us</a></Link>
                <Link to={`/products`} className='Link'><a className='navbar__rightBx-navLinks'>Products</a></Link>
                <Link to={`/client`} className='Link'><a className='navbar__rightBx-navLinks'>Our Client</a></Link>
                <Link to={`/contact`} className='Link'><a className='navbar__rightBx-navLinks'>Contact Us</a></Link>
                </div>
                <div className="navbar__toggle" onClick={() => {setSidebar(!showSidebar)}}>
                    {toggleIcon}
                </div>
            </div>
            <Sidebar show={(showSidebar === true) ? 'show' : 'hide'} />
        </>
    )
}

export default Navbar
