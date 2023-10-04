import React, { useEffect, useState } from 'react'
import './Header.scss'
import LOGO from '../../assets/logo.png'
import { Container } from '../../utils/Container'
import { NavLink, useParams } from 'react-router-dom'

const Header = () => {
  


  return (
    
      <div className='header d-flex justify-content-between align-items-center'>
        <div className='d-flex'>
          <div className='header__logo'>
            <NavLink to='/'>
              <img src={LOGO} />
            </NavLink>
          </div>
          <ul className='header__nav d-flex justify-content-center align-items-center'>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <li  className='header__nav__link'>About</li>
            </NavLink>
            <NavLink to="maqsadimiz">
              <li  className={ name[0]=="maqsadimiz" ? 'header__nav__link active':"header__nav__link"}>Maqsadimiz</li>
            </NavLink>
            <NavLink to="talim">
              <li  className={ name[0]=="talim" ? 'header__nav__link activee':"header__nav__link"}>Talim</li>
            </NavLink>
            <NavLink to="imkoniyatlar">
              <li  className={ name[0]=="imkoniyat" ? 'header__nav__link activee':"header__nav__link"}>Imkoniyat</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="azolik" ? 'header__nav__link activee':"header__nav__link"}>A’zolik</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="profile" ? 'header__nav__link activee':"header__nav__link"}>Profile</li>
            </NavLink>
          </ul>
        </div>
        <div className='header__right d-flex align-items-center'>
          <div className='header__right__leng'>
            <select className=''>
              <option value='2'>UZ</option>
              <option value='1'>RU</option>
            </select>
          </div>
          <NavLink className="header__right__link">Kirish+</NavLink>
        </div>
      </div>
   
  )
}

export default Header
