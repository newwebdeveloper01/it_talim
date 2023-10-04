import React from 'react'
import Header from '../../components/header/Header'
import Home_main from '../../components/home_main/Home_main'
import Partnyor from '../../components/partnyor/Partnyor'
import Blog from '../../components/partnyor_blog/Blog'
import Team from '../../components/team/Team'
import Baner from '../../components/baner/Baner'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <Home_main/>
      <Partnyor/>
      <Blog/>
      <Team/>
      <Baner/>
    </>
  )
}

export default Home
