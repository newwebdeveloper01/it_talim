import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

import "./Cards.scss"
const Cards = ({IMG1 , IMG2 , IMG3}) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
  <div className="col">
    <div className="card h-100 p-0">
      <img src={IMG1} className="card-img-top" alt="..."/>
      <div className="card-body d-flex justify-content-between ps-0">
        
        <p className="card-texts ps-0">O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
        <FiArrowRight color='#184AFB' size={50} />

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-0">
      <img src={IMG2} className="card-img-top" alt="..."/>
      <div className="card-body d-flex justify-content-between ps-0">
        
        <p className="card-texts ps-0">O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
        <FiArrowRight color='#184AFB' size={50} />

      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100 p-0">
      <img src={IMG3} className="card-img-top" alt="..."/>
      <div className="card-body d-flex justify-content-between ps-0">
        
        <p className="card-texts ps-0">O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
        <FiArrowRight color='#184AFB' size={50} />

      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Cards
