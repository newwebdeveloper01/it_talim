import React from 'react'
import { NavLink } from 'react-router-dom'
import './Container.scss'

const Container = ({children}) => {
  return (
    <div className='container'>
        {children}
    </div>
  )
}

const HeaderTitle=({title})=>{
  return(
    <>
      
        <p className='title ps-5 pt-3 pb-2 header_title'>{title}</p>
      
    </>
  )
}

const IconButton=({link , title , icon , className})=>{
  return(
      <NavLink className={className} to={link}>
        {title}
        {icon}
        {/* {title} */}
        </NavLink>
  )
}
{/* <NavLink className='about__info__link'>Batafsil <FiArrowRight color='#184AFB' /></NavLink> */}


const Sectionlogo=({title})=>{
  return(
   <>
<div className='talim__log d-flex align-items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <circle cx='10' cy='10' r='10' fill='#184AFB' />
          </svg>
          <p>{title}</p>
          </div>
      
   </>
  )
}
/*
*/
const AddButton = ({ title , className}) => {
  return (
    <div className={className}>
    <span className='add__button' >{title}</span>
      
    </div>
  )
}






export {Container , IconButton,Sectionlogo,AddButton , HeaderTitle} 