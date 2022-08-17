import React from 'react'
import TablenChairs from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/TablenChairs.png'
import "./Contact.css"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <div>
         <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 2 }}
> 
      <div className="contact-us-section" >
      <div className="table-n-chairs">
        <img src={TablenChairs} alt="Table and Chairs" />
        <div className="brown-square">

        </div>
      </div>

      <div className="text-container">
        <h1>Our Doors Are Always Open Even When They're Not</h1>
      </div>
    </div>
      
    </motion.div>
      <div className="get-in-touch-section">
        <div className="get-in-touch-card">
          <div className="green-square">
            <h1 className="get-in-touch-title">Get In Touch</h1>
            <h3 className="get-in-touch-subtitle">Feel free to send us a message below</h3>
            <form action="#">
              <div className="name">
                <input type="text" placeholder="Name" />
              </div>

              <div className="email">
                <input type="email" placeholder="Email"/>
              </div>

              <div className="message">
              <textarea cols="67" rows="10" name="text" placeholder="Message"></textarea>
              </div>

              <div>
              <button className="get-in-touch-submit"type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <div className="contact-us-card">
          <div className="brown-rectangle">
            <h1 className="contact-us-title">Contact Us</h1>


            <div className="contact-us-address">
              <div className="contact-us-address-icon">
                <i class="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-us-address-text">
                <p>525 Dalton Way</p>
                <p>Suite 200</p>
                <p>Denver, CO 80345</p>
              </div>
            </div>


            <div className="contact-us-phone">
              <div className="contact-us-phone-icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <div className="contact-us-phone-text">
                <p>720-546-2765</p>
              </div>
            </div>


            <div className="contact-us-email">
              <div className="contact-us-email-icon">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-us-email-text">
                <p>info@bakeology.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      

      <div className="subscribe-section">
        <h1 className="subscribe-section-title">Subscribe</h1>
        <h3 className="subscribe-section-subtitle">For Seasonal Menu Items and Specials</h3>
        <div>
          <form action="#">
            <input className="subscribe-section-input"type="text" placeholder="Email" />
            <button className="subscribe-section-button">Subscribe</button>
          </form>
        </div>
      </div>
      
    </div>
  )
}