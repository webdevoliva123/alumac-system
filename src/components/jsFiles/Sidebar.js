import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFiles/sidebar.css'
import SocialMedia from './SocialMedia'

const Sidebar = ({show}) => {
    return (
        <>
            <div className="sidebar" id={show}>
                <div className="sidebar__navLink">
                <Link to={`/home`} className='Link'><a className='siderbar__navLinks'>Home</a></Link>
                <Link to={`/aboutUs`} className='Link'><a className='siderbar__navLinks'>About Us</a></Link>
                <Link to={`/product`} className='Link'><a className='siderbar__navLinks'>Product</a></Link>              
                <Link to={`/client`} className='Link'><a className='siderbar__navLinks'>Our Client</a></Link>
                <Link to={`/contact`} className='Link'><a className='siderbar__navLinks'>Contact Us</a></Link>
                <SocialMedia align={'right-less'} />
                </div>
            </div>
        </>
    )
}

export default Sidebar
