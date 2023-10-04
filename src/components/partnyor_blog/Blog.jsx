import React from 'react'
import { Sectionlogo } from '../../utils/Container'
import "./Blog.scss";
import Cards from '../cards/Cards';
import IMG3 from "../../assets/cards222.png";
import IMG2 from "../../assets/cards3333.png";
import IMG1 from "../../assets/cards1111.png";
import IMG4 from "../../assets/cards4444.png";
import IMG5 from "../../assets/cards5555.png";
import IMG6 from "../../assets/cards6666.png";




const Blog = () => {
  return (
    <>  
        <div className='blog'>
            <Sectionlogo title="Partnyorlar"/> 
            <div className='blog__title d-flex'>
                <p>Yangiliklar va blog</p>
                <span>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish </span>
            </div>
            <Cards IMG2={IMG2} IMG3={IMG3} IMG1={IMG1}/>
            <Cards IMG2={IMG5} IMG3={IMG6} IMG1={IMG4}/>
        </div>
    </>
  )
}

export default Blog
