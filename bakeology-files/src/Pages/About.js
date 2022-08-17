import React from 'react'
import OurStory from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/OurStory.png'
import "./About.css"

export default function AboutUS() {
  return (
    <div>
      <div className="our-story-section" >
        <img className="our-story-image"src={OurStory} alt="Man and Woman standing in front of a restaurant" />
    <h1 className="our-story-title">Our Story</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio facilisis mauris sit amet massa vitae. Quis hendrerit dolor magna eget est lorem. Pellentesque habitant morbi tristique senectus et netus. Nec feugiat nisl pretium fusce id velit ut tortor. Id cursus metus aliquam eleifend mi in. Sagittis id consectetur purus ut. Eget magna fermentum iaculis eu non diam phasellus. Elit ullamcorper dignissim cras tincidunt lobortis. Odio euismod lacinia at quis risus sed vulputate odio ut. Quis imperdiet massa tincidunt nunc pulvinar. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Netus et malesuada fames ac. </p>
    <br />
    <p>Sed augue lacus viverra vitae congue eu consequat ac. A condimentum vitae sapien pellentesque habitant morbi tristique. In mollis nunc sed id semper risus in. Ac ut consequat semper viverra nam libero justo. Elementum sagittis vitae et leo duis ut diam quam nulla. At lectus urna duis convallis convallis tellus. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Blandit massa enim nec dui nunc. Lectus mauris ultrices eros in cursus turpis. Duis ultricies lacus sed turpis. Elementum sagittis vitae et leo duis. </p>
    <br />
    <p className="last-paragraph">Urna cursus eget nunc scelerisque viverra mauris. Leo urna molestie at elementum eu facilisis sed odio morbi. Magna fringilla urna porttitor rhoncus. Vel elit scelerisque mauris pellentesque. Sodales ut etiam sit amet nisl purus in mollis. Velit ut tortor pretium viverra suspendisse. At quis risus sed vulputate odio ut. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Interdum posuere lorem ipsum dolor sit amet consectetur. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Eu consequat ac felis donec et. Libero justo laoreet sit amet cursus sit amet dictum sit. </p>
       </div>  

       <div className="values-section">
        <h1 className="values-section-title">Values</h1>
        <div className="values-section-content">
          <div className="values-community-section">
            <h1>Community</h1>
            <i class="fa-solid fa-people-group"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu. Quisque id diam vel quam elementum. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.  </p>
          </div>

          <div className="values-health-section">
            <h1>Health</h1>
            <i class="fa-solid fa-heart-pulse"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu. Quisque id diam vel quam elementum. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.  </p>
          </div>

          <div className="values-equality-section">
            <h1>Equality</h1>
            <i class="fa-solid fa-scale-balanced"></i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna molestie at elementum eu. Quisque id diam vel quam elementum. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique.  </p>
          </div>
        </div>
       </div>
    </div>
  )
}

