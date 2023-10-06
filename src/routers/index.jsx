import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import About from './about/About'
import Our_goal from './Our_goal/Our_goal'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Education from './education/Education'
import Opportunity from './opportunity/Opportunity'
import Auth from './auth/auth';
import Login from './auth/login/Login';
import Register from "./auth/register/Register"

const AllRoutes = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="auth" element={<Auth/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
      </Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/maqsadimiz' element={<Our_goal/>}/>
        <Route path='/talim' element={<Education/>}/>
        <Route path='/imkoniyatlar' element={<Opportunity/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default AllRoutes
