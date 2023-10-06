import React, { useEffect, useRef, useState } from 'react'
import './Header.scss'
import LOGO from '../../assets/logo.png'
import { Container } from '../../utils/Container'
import { NavLink, useLocation, useParams } from 'react-router-dom';
import i18n from '../../language/i18next';
import { useTranslation } from 'react-i18next';
// import { createLogger } from 'vite';
import {FaBars , FaTimes} from  "react-icons/fa"
// import { Container } from 'react-bootstrap';

const Header = () => {

  const NavRef=useRef();


  const showNavbar=()=>{
    NavRef.current.classList.toggle("d-flex")
  }
  
  const {t}= useTranslation();
  const location=useLocation();


 
  
  return (

    !location.pathname.includes("auth") && (

<>
<div className='mobil_nav' ref={NavRef}>
          <ul className='  justify-content-center align-items-center '>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <li  className='header__nav__link'>{t("About")}</li>
            </NavLink>
            <NavLink to="maqsadimiz">
              <li  className={ name[0]=="maqsadimiz" ? 'header__nav__link active':"header__nav__link"}>{t("Maqsadimiz")}</li>
            </NavLink>
            <NavLink to="talim">
              <li  className={ name[0]=="talim" ? 'header__nav__link activee':"header__nav__link"}>{t("Talim")}</li>
            </NavLink>
            <NavLink to="imkoniyatlar">
              <li  className={ name[0]=="imkoniyat" ? 'header__nav__link activee':"header__nav__link"}>{t("Imkoniyat")}</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="azolik" ? 'header__nav__link activee':"header__nav__link"}>{t("A’zolik")}</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="profile" ? 'header__nav__link activee':"header__nav__link"}>{t("Profile")}</li>
            </NavLink>
          </ul>
          <FaTimes   onClick={showNavbar} size={24} className=''/>
          
          </div>
          <div className='header'>
      <Container>
      <div className='header__div d-flex align-items-center justify-content-between'>
        <div className='d-flex justify-content-lg-start'>
          <div className='header__logo'>
            <NavLink to='/'>
              <img src={LOGO} />
            </NavLink>
          </div>
          <ul className='header__nav  justify-content-center align-items-center '>
            <NavLink to="/about"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              <li  className='header__nav__link'>{t("About")}</li>
            </NavLink>
            <NavLink to="maqsadimiz">
              <li  className={ name[0]=="maqsadimiz" ? 'header__nav__link active':"header__nav__link"}>{t("Maqsadimiz")}</li>
            </NavLink>
            <NavLink to="talim">
              <li  className={ name[0]=="talim" ? 'header__nav__link activee':"header__nav__link"}>{t("Talim")}</li>
            </NavLink>
            <NavLink to="imkoniyatlar">
              <li  className={ name[0]=="imkoniyat" ? 'header__nav__link activee':"header__nav__link"}>{t("Imkoniyat")}</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="azolik" ? 'header__nav__link activee':"header__nav__link"}>{t("A’zolik")}</li>
            </NavLink>
            <NavLink>
              <li  className={ name[0]=="profile" ? 'header__nav__link activee':"header__nav__link"}>{t("Profile")}</li>
            </NavLink>
          </ul>
          
          
        </div>
        <div className='header__right d-flex align-items-center'>
          <div className='header__right__leng'>
            <select className='' onClick={(e)=>{ e.target.value=="2" ? i18n.changeLanguage("ru"):i18n.changeLanguage("uz")}}>
              <option  value='1'>UZ</option>
              <option  value='2'>RU</option>
            </select>
          </div>
          <NavLink to="/auth" className="header__right__link">{t("Kirish")}</NavLink>
          <div className='header__right__bars'>
          
              <FaBars onClick={showNavbar}/>
          </div>
        </div>
      </div>
      </Container>
      </div>
      
</>
      
      
    )
    
      
   
  )
}

export default Header
