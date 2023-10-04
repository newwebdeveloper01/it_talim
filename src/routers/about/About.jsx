import React from 'react'
import "./About.scss"
import Header from '../../components/header/Header'
import Team from '../../components/team/Team'
import Partnyor from '../../components/partnyor/Partnyor'
import Footer from '../../components/footer/Footer'
import Statistika from '../../components/statistika/Statistika'
import Carousel from '../../components/carousel/Carousel'


const About = () => {
  return (
    <>

        <Statistika/>
        <Carousel/>
        <Team/>
        <Partnyor/>

    </>
  )
}

export default About
