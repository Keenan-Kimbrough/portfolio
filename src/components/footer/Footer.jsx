import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
    <footer>
        <a href='a' className='footer__logo'> Kimbrough Technology</a>
<ul className="permalinks">
<li> <a href="#"> Home </a></li>
    <li> <a href="#about"> About </a></li>
    <li> <a href="#experience"> Experience </a></li>
    <li> <a href="#services"> Services </a></li>
    <li> <a href="#portfolio"> Portfolio </a></li>
    <li> <a href="#testimonials"> Testimonials </a></li>
    <li> <a href="#contact"> Contact </a></li>
    </ul>
    <div className="footer__socials">
        <a href='https://facebook.com'> <FaInstagram/></a>
        <a href='https://facebook.com'> <FiInstagram/></a>
        <a href='https://facebook.com'> <IoLogoTwitter/></a>
    </div>


    <div className="footer__copyright">
        <small>&copy; Keenan Kimbrough Website. All rights reserved </small>
    </div>


    </footer>
  )
}

export default Footer