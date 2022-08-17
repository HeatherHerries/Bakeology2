import React from 'react'
import "./CakesCards.css"
import DoubleChocoMousseCake from "/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/DoubleChocoMousseCake.png";
import TripleChocoMousse from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/TripleChocoMousseCake.png'
import BlackForest from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/BlackForest.png'
import CoconutLaRaz from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/CoconutLaRaz.png'
import CarrotCake from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/CarrotCake.png'
import FrasierCake from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/FrasierCake.png'
import GermanChocoCake from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/GermanChocoCake.png'

export default function CakesCards(props) {
  return (
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={DoubleChocoMousseCake}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Double Chocolate Mousse
      </h2>
      
      <p>
      Voted Best Cake!! Layers of bittersweet chocolate mousse and chocolate cake covered in cholcolate ganache.
      </p>
      <br />
      <div>
    </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={TripleChocoMousse}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Triple Chocolate Mousse
      </h2>
      <p>
      Layers of bittersweet white chocolate and milk chocolate covered in chocolate ganache and white chocolate shavings.
      </p>
      <div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={BlackForest}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Black Forest
      </h2>
      <p>
      Layers of bittersweet chocolate mousse and chocolate cake with cherries garnished with whipped cream and chocolate.
      </p>
      <div>
    </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={CoconutLaRaz}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Coconut La Raz
      </h2>
      <p>
      White cake layered with lemon and raspberry and topped with a toasted coconut whipped cream.
      </p>
      <div>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header">
      <img src={CarrotCake}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Carrot Cake
      </h2>
      <p>
      Walnut studded carrot cake topped with cream cheese frosting.
      </p>
      <div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={FrasierCake}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Frasier
      </h2>
      <p>
      Chefs Gala Winner! Whole strawberries and pastry cream layered between two layers of white cake topped with whipped cream
      </p>
      <div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={GermanChocoCake}alt="rover" />
    </div>
    <div class="card-body">
      <h2 className='gcc-title'>
        German Chocolate Cake
      </h2>
      <p>
      Layers of bittersweet chocolate mousse and chocolate cake with traditional german coconut and pecan topping..
      </p>
      <div>
      </div>
    </div>
  </div>
  </div>
  )
}
