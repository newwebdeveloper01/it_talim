import React from 'react'
import "./Baner.scss";
import { NavLink } from 'react-router-dom';
const Baner = () => {
  return (
    <>
        <div className='baner  row'>
            <div className='baner__left '>

            </div> 
            <div className='baner__right d-flex align-items-end col'>
                <p>ta’limga berilgan imkoniyatdan foydalaish kerak</p>
                <div className='d-flex align-items-center justify-content w-100'>
                    <p>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va ularning</p>
                    <NavLink className="baner__right__link">Kirish +</NavLink>
                </div>
            </div> 
        </div> 
    </>
  )
}

export default Baner
