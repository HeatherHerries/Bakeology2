import React from 'react'
import "./Menu.css"
import BakedGoodsCards from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Components/BakedGoodsCards';
import TartsDessertsCards from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Components/TartsDessertsCards';
import CakesCards from '/Users/heatherherries/Desktop/Bakeology/bakeology-files/src/Components/CakesCards';

export default function Menu(props) {
  return (
    <div>
      <div className="baked-goods-section">
      <h1 className="baked-goods-text">Baked Goods</h1> 
     <BakedGoodsCards />
      </div>
          
      <div className="tarts-desserts-section">
      <h1 className="tarts-desserts-text">Tarts & Desserts</h1> 
      <p className="pricing">$7.99 Each</p>
      <TartsDessertsCards />
      </div>
      
      <div className="cakes-section">
      <h1 className="cakes-text">Cakes</h1>
      <p className="pricing">$7.99 Slice / $55.99 Round / $99.99 Half Sheet / 199.99 Full Sheet</p>
      <CakesCards />
      </div>

    </div>
  )
}
