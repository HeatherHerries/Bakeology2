import "./Home.css"
import KeyLimePie from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/KeyLimePie.jpeg'
import SimpleOrganic from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/SimpleOrganic.png'
import EstheticsMatter from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/EstheticsMatter.png'
import PastryPrecision from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/PastryPrecision.png'
import DelectibleByDesign from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/DelectibleByDesign.png'
import React from 'react'
// import LazyLoad from "../LazyLoad";

export default function Home() {
  return (
      <div>
        <div className="hero-section" >
          <img src={KeyLimePie} alt="Key Lime Pie" />
          <div className="hero-text-content">
            <h1 className="tagline1">Where Science In Baking</h1>
            <h2 className="tagline2">Creates a Peice of Art</h2>
          </div>
        </div>
      
      <div>
        <div className="introduction-section">

          <div className="intro1">
            <div className="simple-organic-image">
              <img src={SimpleOrganic} alt="" />
            </div>

            <div className="simple-organic-text">
              <h1>Simple & Organic</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Est ullamcorper eget nulla facilisi etiam. Cursus sit amet dictum sit amet justo donec.   </p>
            </div>
          </div>

          <div className="intro2">
            <div className="esthetics-matter-text">
              <h1>Esthetics Matter</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Est ullamcorper eget nulla facilisi etiam. Cursus sit amet dictum sit amet justo donec.  </p>
            </div>

            <div className="esthetics-matter-image">
              <img src={EstheticsMatter} alt="" />
            </div>
          </div>


          <div className="intro3">
            <div className="pastry-precision-image">
              <img src={PastryPrecision} alt="" />
            </div>

            <div className="pastry-precision-text">
              <h1>Pastry Precision</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod. Est ullamcorper eget nulla facilisi etiam. Cursus sit amet dictum sit amet justo donec.  </p>
            </div>
          </div>

          <div className="intro4">
            <div className="delectible-by-design-text">
              <h1>Delectible By Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices neque ornare aenean euismod.   </p>
              <button className="delectible-by-design-button">Learn More</button>
            </div>

            <div className="delectible-by-design-image">
              <img src={DelectibleByDesign} alt="" />
            </div>
          </div>

          
        </div>
      </div>
        
        
        {/* <LazyLoad /> */}
      
    </div>
  )
}
