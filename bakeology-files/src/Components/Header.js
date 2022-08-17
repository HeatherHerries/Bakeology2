import  React from 'react';
import  "./Header.css"
import { Link } from "react-router-dom";
import BakeologyLogo from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/BakeologyLogo.png'






export default function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
          <navbar>
            <ul className="nav-list">
              <li className="nav-image">
              </li>
              <Link style={{textDecoration: 'none'}}to= "/"> <li className="nav-item nav-home">Home</li></Link> 
              <Link style={{textDecoration: 'none'}}to= "/Menu"> <li className="nav-item nav-menu">Menu</li></Link> 
              <Link style={{textDecoration: 'none'}} to= "/About"> <li className="nav-item nav-about">About</li></Link> 
              <Link style={{textDecoration: 'none'}}to="/Contact"> <li className="nav-item nav-contact">Contact</li></Link> 
          </ul>
        </navbar>
      </div>
    </div>
  )
}
