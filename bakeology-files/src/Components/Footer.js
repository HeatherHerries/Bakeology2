import React from 'react'
import './Footer.css'
import BakeologyLogoLight from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/BakeologyLogoLight.png'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className='footer-content'>
        
        <div className='logo-container'>
          <img src={BakeologyLogoLight} alt="Bakeology Logo" />
        </div>

        {/* Column 1 */}
        <div className='contact-details'>
          <ul>
            <li>525 Dalton Way</li>
            <li>Suite 200</li>
            <li>Denver, CO 80345</li>
            <br />
            <li>720-546-2765</li>
            <br />
            <li>info@bakeology.com</li>
          </ul>
        </div>
        {/* Column 2 */}
        <div className='footer-nav'>
          <ul>
          <Link style={{textDecoration: 'none'}}to= "/"> <li className='footer-home'>Home</li></Link> 
            <br />
            <Link style={{textDecoration: 'none'}}to= "Menu"> <li className='footer-menu'>Menu</li></Link> 
            <br />
            <Link style={{textDecoration: 'none'}}to= "AboutUs"> <li className='footer-about'>About</li></Link> 
            <br />
           <Link style={{textDecoration: 'none'}}to= "ContactUs"><li className='footer-contact'>Contact</li> </Link> 
          </ul>
        </div>
        {/* Column 3 */}
        <div className='social-icons'>
          <ul>
            <li>
            <i className="fa-brands fa-facebook footer-facebook"></i>
            </li>
            <br />
            <li>
            <i className="fa-brands fa-instagram footer-instagram"></i>
            </li>
        
            <br />
            <li>
            <i className="fa-brands fa-twitter footer-twitter"></i>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2022 Bakeology LLC</p>
      </div>
    </div>
  )
}
