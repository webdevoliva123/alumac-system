import React from 'react'
import { Link } from 'react-router-dom'
import '../cssFiles/sidebar.css'
import SocialMedia from './SocialMedia'

const Sidebar = ({show}) => {
    return (
        <>
            <div className="sidebar" id={show}>
                <div className="sidebar__navLink">
                <a href={`/home`} className='Link'><article className='siderbar__navLinks'>Home</article></a>
                <a href={`/aboutUs`} className='Link'><article className='siderbar__navLinks'>About Us</article></a>
                <a href={`/products`} className='Link'><article className='siderbar__navLinks'>Products</article></a>              
                <a href={`/client`} className='Link'><article className='siderbar__navLinks'>Our Client</article></a>
                <a href={`/contact`} className='Link'><article className='siderbar__navLinks'>Contact Us</article></a>
                <SocialMedia align={'right-less'} />
                </div>
            </div>
        </>
    )
}

export default Sidebar
