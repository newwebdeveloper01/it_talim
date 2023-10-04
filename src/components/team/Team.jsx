import React from 'react'
import { IconButton, Sectionlogo } from '../../utils/Container';
import { FiArrowRight } from 'react-icons/fi'
import "./Team.scss";
import IMG1 from "../../assets/profile1.png"
import IMG2 from "../../assets/profile2.png"
import IMG3 from "../../assets/profile3.png"

const Team = () => {
  return (
    <>
        <div className='team '>
            <Sectionlogo title="Team"/>
            <div className='team__title d-flex  justify-content-between align-items-center'>
                <p>it ta’lim uyushmasi jamoasi</p>
                <IconButton title="batafsil" icon={<FiArrowRight color='#184AFB' />} className="iconButton" />
            </div>
            <div className='team__items d-flex justify-content-end'>
            <div className='team__items__profile'>
              <img src={IMG1}  alt='bor edi'/>
              <p>Nodirbek Barnayev</p>
              <span>Ijrochi Director</span>
            </div>
            <div className='team__items__profile'>
              <img src={IMG2}  alt='bor edi'/>
              <p>Nodirbek Barnayev</p>
              <span>Ijrochi Director</span>
            </div>
            <div className='team__items__profile'>
              <img src={IMG3}  alt='bor edi'/>
              <p>Nodirbek Barnayev</p>
              <span>Ijrochi Director</span>
            </div>
            <div></div>
            <div></div>

            </div>
        </div> 
    </>
  )
}

export default Team
