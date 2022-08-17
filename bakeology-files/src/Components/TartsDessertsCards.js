import React from 'react'
import "./TartsDessertsCards.css"
import CaramelPecanTart from "/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/CaramelPecanTart.png";
import AppleTart from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/AppleTart.png'
import LemonTart from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/LemonTart.png'
import LimeTart from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/LimeTart.png'
import Napoleon from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/Napoleon.png'
import Tiramisu from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/Tiramisu.png'
import CremeBrulee from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Assets/Images/MenuItems/CremeBrulee.png'

export default function TartsDessertsCards(props) {
  return (
    <div class="container">
  <div class="card">
    <div class="card-header">
      <img src={CaramelPecanTart}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Caramel Pecan Tart
      </h2>
      <p>
      Light almond pastry crust baked and filled with caramel and pecans.
      </p>
      <br />
      <div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={AppleTart}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Apple Tart
      </h2>
      <p>
      Light almond pastry crust baked, filled with almond butter and topped with granny smith apples.
      </p>
      <div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <img src={LemonTart}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Lemon Tart
      </h2>
      <p>
      Light almond pastry crust baked and filled with silky lemon curd.
      </p>
      <div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={LimeTart}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Lime Tart
      </h2>
      <p>
      Light almond pastry crust baked and filled with a smooth lime curd and topped with meringue.
      </p>
      <div>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header">
      <img src={Napoleon}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Napoleon
      </h2>
      <p>
      Layers of bavarian cream in crisp light puff pastry topped with fondant and chocolate.
      </p>
      <div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={Tiramisu}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Tiramisu
      </h2>
      <p>
      Marscapone cheese mousse flavored with rum layered with espresso and kahlua soaked lady fingers.
      </p>
      <div>
      </div>
    </div>
  </div>

  <div class="card">
    <div class="card-header">
      <img src={CremeBrulee}alt="rover" />
    </div>
    <div class="card-body">
      <h2>
        Creme Brulee
      </h2>
      <p>
      Baked vanilla bean custard topped with caramelized sugar garnished with whipped cream and berries.
      </p>
      <div>
      </div>
    </div>
  </div>
  </div>
  )
}
