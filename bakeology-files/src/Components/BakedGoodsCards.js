import React from 'react'
import BakersDozen from "/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/BakersDozen.png";
import "./BakedGoodsCards.css"
import CoffeeCake from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/WholeCoffeeCake.png'
import DinnerRolls from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/DinnerRolls.png'
import Baguette from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/Baguette.png'
import Croissant from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/Croissant.png'
import Muffins from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/Muffins.png'
export default function BakedGoodsCards(props) {
  return (
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={BakersDozen}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Bakers Choice Dozen
      </h2>
      <h5>$36.99</h5>
      <p>
      Perfect for the morning! Baker's selection of our delicious baked goods!
      </p>
      <div>
        
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={CoffeeCake}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Whole Coffee Cake
      </h2>
      <h5>$25.99</h5>
      <p>
      A delightful soft sweet cake laced with cinnamon and topped with strussel.
      </p>
      <div>
        
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={DinnerRolls}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Dinner Rolls
      </h2>
      <h5>$5.99</h5>
      <p>
      A  dozen of a customer favorite to pick up just before dinner. Like you just pulled them out of the oven.
      </p>
      <div>
        
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={Baguette}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Baguette
      </h2>
      <h5>$4.99</h5>
      <p>
      Just like it is straight from Paris!
      </p>
      
    </div>
  </div>
  
  <div class="card">
    <div class="card-header">
      <img src={Croissant}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Croissant
      </h2>
      <h5>$5.99</h5>
      <p>
      Your choice of six butter, or filled with chocolate, cherry, cream cheese or almond.
      </p>
      <div>
        
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={Muffins}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Muffins
      </h2>
      <h5>$5.99</h5>
      <p>
      Your choice of six blueberry, raspberry, almond poppyseed or chocolate chip.
      </p>
      <div>
        
      </div>
    </div>
  </div>
  </div>
  )
}
