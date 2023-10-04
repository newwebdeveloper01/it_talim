import React from 'react'
import './Home_main.scss'
import { FiArrowRight } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';
import IMG1 from "../../assets/edu4.png";
import IMG2 from "../../assets/edu5.png";
import IMG3 from "../../assets/edu7.png";
import { IconButton , Sectionlogo ,AddButton } from '../../utils/Container';
const Home_main = () => {
  return (
    <>
      <div className='main1 d-flex text-start align-items-center justify-content-between'>
        <p>BIR BILAN XALQARO DARAJAGACHA</p>{' '}
        <span>
          O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
          ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish{' '}
        </span>
      </div>

      <div className='about d-flex align-items-baseline'>
      <Sectionlogo title="About"/>

        <div className='about__info'>
          <span>IT ta’lim uyshmasi bilan bo’ling</span>
          <p>
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
          <NavLink className='about__info__link'>Batafsil <FiArrowRight color='#184AFB' /></NavLink>
        </div>
        <div className='about__img'></div>
        <div></div>
        <div></div>
      </div>

      <div className='maqsadlarimiz'>
      <Sectionlogo title="Maqsadlarimiz"/>

        <div className='maqsadlarimiz__title'>
          <p>Maqsadimiz bizni dunyo tan olishi</p>
        </div>
        <div className='d-flex maqsadlarimiz__info'>
          <div className='maqsadlarimiz__info__img'></div>
          <div className='maqsadlarimiz__info__dec d-flex '>
            <div className='maqsadlarimiz__info__dec__item d-flex align-items-center'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat <br />{' '}
                ta'lim muassasalarini qo'llab quvvatlash
              </p>
              <NavLink>
                {' '}
                <div className='maqsadlarimiz__info__dec__item__icon '>
                  {' '}
                  <FiArrowRight color='#184AFB' />
                </div>
              </NavLink>
            </div>
            <div className='maqsadlarimiz__info__dec__item d-flex align-items-center'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat <br />{' '}
                ta'lim muassasalarini qo'llab quvvatlash
              </p>
              <NavLink>
                {' '}
                <div className='maqsadlarimiz__info__dec__item__icon '>
                  {' '}
                  <FiArrowRight color='#184AFB' />
                </div>
              </NavLink>
            </div>
            <div className='maqsadlarimiz__info__dec__item d-flex align-items-center'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat <br />{' '}
                ta'lim muassasalarini qo'llab quvvatlash
              </p>
              <NavLink>
                {' '}
                <div className='maqsadlarimiz__info__dec__item__icon '>
                  {' '}
                  <FiArrowRight color='#184AFB' />
                </div>
              </NavLink>
            </div>
            <div className='maqsadlarimiz__info__dec__item d-flex align-items-center'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat <br />{' '}
                ta'lim muassasalarini qo'llab quvvatlash
              </p>
              <NavLink>
                {' '}
                <div className='maqsadlarimiz__info__dec__item__icon '>
                  {' '}
                  <FiArrowRight color='#184AFB' />
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className='talim'>
      <Sectionlogo title="Ta'lim"/>

        <div className='talim__title'>
          <p>Ta’limga berilga imkoniyatdan foydalanish</p>
        </div>

        <div className='row talim__card'>
          <div className='col'>
            <div className='card mb-3'>
                <h5 className='talim__card__title'>IT ta’lim va online kontent ko’paytirish</h5>
              <img src={IMG1} className='talim__card__img' alt='...' />
              <div className='card-body'>
                <p className='talim__card__text'>
                 Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
                </p>
                <p className='card-text'>
                  <NavLink className='talim__card__muted'>Batafsil <FiArrowRight color='#184AFB' /> </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-3'>
                <h5 className='talim__card__title mb-5'>A'ZOLIK</h5>
                <img src={IMG2} className='talim__card__img' alt='...' />

              <div className='card-body'>
                <p className='talim__card__text'>
                 Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
                </p>
                <p className='card-text'>
                  <NavLink className='talim__card__muted'>Batafsil <FiArrowRight color='#184AFB' /> </NavLink>
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card mb-3'>
            <h5 className='talim__card__title'>TARG'IBOT VA RAG'BATLANTIRISH</h5>
            <img src={IMG3} className='talim__card__img' alt='...' />

              <div className='card-body'>
                
                <p className='talim__card__text'>
                 Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
                </p>
                <p className='card-text'>
                  <NavLink className='talim__card__muted'>Batafsil <FiArrowRight color='#184AFB' /> </NavLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='imkoniyatlar'>
      <Sectionlogo title="Imkoniyatlar"/>

      <div className='imkoniyatlar__title'>
          <p>ta’lim berilgan imkoniyatlar</p>
        </div>
        <div className='imkoniyatlar__cards d-flex justify-content-end'>
        
        <div className='imkoniyatlar__cards__item'>
          <p>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish</p>
        </div>
        
        <div className='imkoniyatlar__cards__item'>
          <p>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish</p>
        </div>
        
        <div className='imkoniyatlar__cards__item'>
          <p>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish</p>
        </div>
        
        <div className='imkoniyatlar__cards__item'>
          <p>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish</p>
        </div>
        

        </div>
      </div>


      <div className='imkoniyatlar2'>
      <Sectionlogo title="Imkoniyatlar"/>

      <div className='imkoniyatlar2__title'>
          <p>Bajarilgan ishlar</p>
        </div>
        <div className='imkoniyatlar2__cards d-flex justify-content-end'>
        
        <div className='col-6'>

          <div className='imkoniyatlar2__cards__item col'>
          <svg className='imkoniyatlar2__cards__item__icon' xmlns="http://www.w3.org/2000/svg" width="173" height="120" viewBox="0 0 173 120" fill="none">
  <path d="M172.368 120H0.566551C0.249433 120 0 119.751 0 119.432V0.568495C0 0.25013 0.249433 0 0.566551 0H172.368C172.685 0 172.934 0.25013 172.934 0.568495V119.432C172.934 119.751 172.685 120 172.368 120ZM1.13307 118.863H171.801V1.13681H1.13307V118.863Z" fill="#2E3038"/>
  <path d="M155.626 17.7012C153.201 17.7012 151.23 15.723 151.23 13.2901C151.23 10.8572 153.201 8.87895 155.626 8.87895C158.048 8.87895 160.021 10.8572 160.021 13.2901C160.021 15.723 158.061 17.7012 155.626 17.7012ZM155.626 10.0158C153.824 10.0158 152.364 11.4823 152.364 13.2901C152.364 15.0978 153.824 16.5644 155.626 16.5644C157.427 16.5644 158.888 15.0978 158.888 13.2901C158.888 11.4823 157.427 10.0158 155.626 10.0158Z" fill="#2E3038"/>
  <path d="M145.726 13.2902C145.726 15.4163 144.016 17.133 141.898 17.133C139.78 17.133 138.069 15.4163 138.069 13.2902C138.069 11.1643 139.78 9.44757 141.898 9.44757C144.016 9.44757 145.726 11.1757 145.726 13.2902Z" fill="#2E3038"/>
  <path d="M131.998 13.2902C131.998 15.4163 130.288 17.133 128.169 17.133C126.051 17.133 124.341 15.4163 124.341 13.2902C124.341 11.1643 126.051 9.44757 128.169 9.44757C130.288 9.44757 131.998 11.1757 131.998 13.2902Z" fill="#2E3038"/>
  <path d="M161.199 27.7852C161.199 27.2329 160.752 26.7852 160.199 26.7852H13.6084C13.0561 26.7852 12.6084 27.2329 12.6084 27.7852V108.45C12.6084 109.002 13.0561 109.45 13.6084 109.45H160.199C160.752 109.45 161.199 109.002 161.199 108.45V27.7852Z" fill="#184AFB"/>
  <path d="M87.4358 97.5345H87.2666C70.6713 97.1707 57.5091 83.3686 57.8726 66.713C58.2236 50.5008 71.2717 37.4719 87.4251 37.199H87.6068C104.213 37.2444 117.635 50.7964 117.578 67.4634C117.533 84.1304 104.031 97.6028 87.4358 97.5459V97.5345ZM87.4358 38.3246C71.4641 38.5973 58.7331 51.8081 58.9932 67.85C59.2533 83.4369 71.7367 96.0451 87.2772 96.3863H87.4483C103.431 96.4317 116.411 83.4711 116.457 67.4292C116.502 51.3875 103.589 38.3586 87.6068 38.3132L87.4358 38.3246Z" fill="white"/>
  <path d="M80.6532 55.8938L80.502 78.6265L101.168 67.2696L80.6532 55.8938Z" fill="white"/>
          </svg>
          <div className='imkoniyatlar2__cards__item__dec d-flex'>
            <p>IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim muassasalarini qo'llabquvvatlash</p>
            <NavLink><FiArrowRight size={30}/></NavLink>
          </div>
          </div>

        </div>
        <div className='col-6'>

<div className='imkoniyatlar2__cards__item col'>
<svg className='imkoniyatlar2__cards__item__icon' xmlns="http://www.w3.org/2000/svg" width="173" height="120" viewBox="0 0 173 120" fill="none">
<path d="M172.368 120H0.566551C0.249433 120 0 119.751 0 119.432V0.568495C0 0.25013 0.249433 0 0.566551 0H172.368C172.685 0 172.934 0.25013 172.934 0.568495V119.432C172.934 119.751 172.685 120 172.368 120ZM1.13307 118.863H171.801V1.13681H1.13307V118.863Z" fill="#2E3038"/>
<path d="M155.626 17.7012C153.201 17.7012 151.23 15.723 151.23 13.2901C151.23 10.8572 153.201 8.87895 155.626 8.87895C158.048 8.87895 160.021 10.8572 160.021 13.2901C160.021 15.723 158.061 17.7012 155.626 17.7012ZM155.626 10.0158C153.824 10.0158 152.364 11.4823 152.364 13.2901C152.364 15.0978 153.824 16.5644 155.626 16.5644C157.427 16.5644 158.888 15.0978 158.888 13.2901C158.888 11.4823 157.427 10.0158 155.626 10.0158Z" fill="#2E3038"/>
<path d="M145.726 13.2902C145.726 15.4163 144.016 17.133 141.898 17.133C139.78 17.133 138.069 15.4163 138.069 13.2902C138.069 11.1643 139.78 9.44757 141.898 9.44757C144.016 9.44757 145.726 11.1757 145.726 13.2902Z" fill="#2E3038"/>
<path d="M131.998 13.2902C131.998 15.4163 130.288 17.133 128.169 17.133C126.051 17.133 124.341 15.4163 124.341 13.2902C124.341 11.1643 126.051 9.44757 128.169 9.44757C130.288 9.44757 131.998 11.1757 131.998 13.2902Z" fill="#2E3038"/>
<path d="M161.199 27.7852C161.199 27.2329 160.752 26.7852 160.199 26.7852H13.6084C13.0561 26.7852 12.6084 27.2329 12.6084 27.7852V108.45C12.6084 109.002 13.0561 109.45 13.6084 109.45H160.199C160.752 109.45 161.199 109.002 161.199 108.45V27.7852Z" fill="#184AFB"/>
<path d="M87.4358 97.5345H87.2666C70.6713 97.1707 57.5091 83.3686 57.8726 66.713C58.2236 50.5008 71.2717 37.4719 87.4251 37.199H87.6068C104.213 37.2444 117.635 50.7964 117.578 67.4634C117.533 84.1304 104.031 97.6028 87.4358 97.5459V97.5345ZM87.4358 38.3246C71.4641 38.5973 58.7331 51.8081 58.9932 67.85C59.2533 83.4369 71.7367 96.0451 87.2772 96.3863H87.4483C103.431 96.4317 116.411 83.4711 116.457 67.4292C116.502 51.3875 103.589 38.3586 87.6068 38.3132L87.4358 38.3246Z" fill="white"/>
<path d="M80.6532 55.8938L80.502 78.6265L101.168 67.2696L80.6532 55.8938Z" fill="white"/>
</svg>
<div className='imkoniyatlar2__cards__item__dec d-flex'>
  <p>IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim muassasalarini qo'llabquvvatlash</p>
  <NavLink><FiArrowRight size={30}/></NavLink>
</div>
</div>

</div>
 <div className='col-6'>

<div className='imkoniyatlar2__cards__item col'>
<svg className='imkoniyatlar2__cards__item__icon' xmlns="http://www.w3.org/2000/svg" width="173" height="120" viewBox="0 0 173 120" fill="none">
<path d="M172.368 120H0.566551C0.249433 120 0 119.751 0 119.432V0.568495C0 0.25013 0.249433 0 0.566551 0H172.368C172.685 0 172.934 0.25013 172.934 0.568495V119.432C172.934 119.751 172.685 120 172.368 120ZM1.13307 118.863H171.801V1.13681H1.13307V118.863Z" fill="#2E3038"/>
<path d="M155.626 17.7012C153.201 17.7012 151.23 15.723 151.23 13.2901C151.23 10.8572 153.201 8.87895 155.626 8.87895C158.048 8.87895 160.021 10.8572 160.021 13.2901C160.021 15.723 158.061 17.7012 155.626 17.7012ZM155.626 10.0158C153.824 10.0158 152.364 11.4823 152.364 13.2901C152.364 15.0978 153.824 16.5644 155.626 16.5644C157.427 16.5644 158.888 15.0978 158.888 13.2901C158.888 11.4823 157.427 10.0158 155.626 10.0158Z" fill="#2E3038"/>
<path d="M145.726 13.2902C145.726 15.4163 144.016 17.133 141.898 17.133C139.78 17.133 138.069 15.4163 138.069 13.2902C138.069 11.1643 139.78 9.44757 141.898 9.44757C144.016 9.44757 145.726 11.1757 145.726 13.2902Z" fill="#2E3038"/>
<path d="M131.998 13.2902C131.998 15.4163 130.288 17.133 128.169 17.133C126.051 17.133 124.341 15.4163 124.341 13.2902C124.341 11.1643 126.051 9.44757 128.169 9.44757C130.288 9.44757 131.998 11.1757 131.998 13.2902Z" fill="#2E3038"/>
<path d="M161.199 27.7852C161.199 27.2329 160.752 26.7852 160.199 26.7852H13.6084C13.0561 26.7852 12.6084 27.2329 12.6084 27.7852V108.45C12.6084 109.002 13.0561 109.45 13.6084 109.45H160.199C160.752 109.45 161.199 109.002 161.199 108.45V27.7852Z" fill="#184AFB"/>
<path d="M87.4358 97.5345H87.2666C70.6713 97.1707 57.5091 83.3686 57.8726 66.713C58.2236 50.5008 71.2717 37.4719 87.4251 37.199H87.6068C104.213 37.2444 117.635 50.7964 117.578 67.4634C117.533 84.1304 104.031 97.6028 87.4358 97.5459V97.5345ZM87.4358 38.3246C71.4641 38.5973 58.7331 51.8081 58.9932 67.85C59.2533 83.4369 71.7367 96.0451 87.2772 96.3863H87.4483C103.431 96.4317 116.411 83.4711 116.457 67.4292C116.502 51.3875 103.589 38.3586 87.6068 38.3132L87.4358 38.3246Z" fill="white"/>
<path d="M80.6532 55.8938L80.502 78.6265L101.168 67.2696L80.6532 55.8938Z" fill="white"/>
</svg>
<div className='imkoniyatlar2__cards__item__dec d-flex'>
  <p>IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim muassasalarini qo'llabquvvatlash</p>
  <NavLink><FiArrowRight size={30}/></NavLink>
</div>
</div>

</div>
<div className='col-6'>

<div className='imkoniyatlar2__cards__item col'>
<svg className='imkoniyatlar2__cards__item__icon' xmlns="http://www.w3.org/2000/svg" width="173" height="120" viewBox="0 0 173 120" fill="none">
<path d="M172.368 120H0.566551C0.249433 120 0 119.751 0 119.432V0.568495C0 0.25013 0.249433 0 0.566551 0H172.368C172.685 0 172.934 0.25013 172.934 0.568495V119.432C172.934 119.751 172.685 120 172.368 120ZM1.13307 118.863H171.801V1.13681H1.13307V118.863Z" fill="#2E3038"/>
<path d="M155.626 17.7012C153.201 17.7012 151.23 15.723 151.23 13.2901C151.23 10.8572 153.201 8.87895 155.626 8.87895C158.048 8.87895 160.021 10.8572 160.021 13.2901C160.021 15.723 158.061 17.7012 155.626 17.7012ZM155.626 10.0158C153.824 10.0158 152.364 11.4823 152.364 13.2901C152.364 15.0978 153.824 16.5644 155.626 16.5644C157.427 16.5644 158.888 15.0978 158.888 13.2901C158.888 11.4823 157.427 10.0158 155.626 10.0158Z" fill="#2E3038"/>
<path d="M145.726 13.2902C145.726 15.4163 144.016 17.133 141.898 17.133C139.78 17.133 138.069 15.4163 138.069 13.2902C138.069 11.1643 139.78 9.44757 141.898 9.44757C144.016 9.44757 145.726 11.1757 145.726 13.2902Z" fill="#2E3038"/>
<path d="M131.998 13.2902C131.998 15.4163 130.288 17.133 128.169 17.133C126.051 17.133 124.341 15.4163 124.341 13.2902C124.341 11.1643 126.051 9.44757 128.169 9.44757C130.288 9.44757 131.998 11.1757 131.998 13.2902Z" fill="#2E3038"/>
<path d="M161.199 27.7852C161.199 27.2329 160.752 26.7852 160.199 26.7852H13.6084C13.0561 26.7852 12.6084 27.2329 12.6084 27.7852V108.45C12.6084 109.002 13.0561 109.45 13.6084 109.45H160.199C160.752 109.45 161.199 109.002 161.199 108.45V27.7852Z" fill="#184AFB"/>
<path d="M87.4358 97.5345H87.2666C70.6713 97.1707 57.5091 83.3686 57.8726 66.713C58.2236 50.5008 71.2717 37.4719 87.4251 37.199H87.6068C104.213 37.2444 117.635 50.7964 117.578 67.4634C117.533 84.1304 104.031 97.6028 87.4358 97.5459V97.5345ZM87.4358 38.3246C71.4641 38.5973 58.7331 51.8081 58.9932 67.85C59.2533 83.4369 71.7367 96.0451 87.2772 96.3863H87.4483C103.431 96.4317 116.411 83.4711 116.457 67.4292C116.502 51.3875 103.589 38.3586 87.6068 38.3132L87.4358 38.3246Z" fill="white"/>
<path d="M80.6532 55.8938L80.502 78.6265L101.168 67.2696L80.6532 55.8938Z" fill="white"/>
</svg>
<div className='imkoniyatlar2__cards__item__dec d-flex align-items-center'>
<p>IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim muassasalarini qo'llabquvvatlash</p>
<NavLink><FiArrowRight size={30}/></NavLink>
</div>
</div>

</div>
        
        
       

        </div>
      </div>

      <div className="imkoniyatlar3">
      <Sectionlogo title="Imkoniyatlar"/>
        
        <div className='imkoniyatlar3__title'>
          <p>ta’lim berilgan imkoniyatlar</p>
        </div>
        <div className='imkoniyatlar3__cards d-flex justify-content-end '>
        <div className='imkoniyatlar3__cards__item d-flex justify-content-center align-items-center'>
            <div className='imkoniyatlar3__cards__item__img'></div>
            <div className='imkoniyatlar3__cards__item__info p-3'>
              <p>Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq jalb qilish</p>
              <p className='imkoniyatlar3__cards__item__info__span'>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish </p>
              <IconButton title="Batafsil"  className="imkoniyatlar3__cards__item__info__link" />
            </div>
        </div>
        <div className='imkoniyatlar3__cards__item d-flex justify-content-center align-items-center'>
            <div className='imkoniyatlar3__cards__item__img2'></div>
            <div className='imkoniyatlar3__cards__item__info p-3'>
              <p>Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq jalb qilish</p>
              <p className='imkoniyatlar3__cards__item__info__span'>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish </p>
              <IconButton title="Batafsil"  className="imkoniyatlar3__cards__item__info__link" />
            </div>
        </div>
        <div className='imkoniyatlar3__cards__item d-flex justify-content-center align-items-center'>
            <div className='imkoniyatlar3__cards__item__img3'></div>
            <div className='imkoniyatlar3__cards__item__info p-3'>
              <p>Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq jalb qilish</p>
              <p className='imkoniyatlar3__cards__item__info__span'>O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish </p>
              <IconButton title="Batafsil"  className="imkoniyatlar3__cards__item__info__link" />
            </div>
        </div>


        </div>
      </div>


      <div className='xalqaro'>
        <Sectionlogo title="Xalqaro"/>
        <div className='xalqaro__title '>
          <p>ta’lim berilga imkoniyatlardan foydalaish kerak</p>
        </div>
        <div className=' xalqaro__info row'>
          <div className='xalqaro__info__img col-8'>
            <p>Bizga A’zo bo’ling . Biznesingiz va siz dunyo taniydigan darajadasiz</p>
          </div>

          <div className='xalqaro__info__cards col-4'>
            <div className='col'>
              <div className='d-flex align-items-center justify-content-between'>
              <p>A’zo bo’lish</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M0.112727 0H37.2173C38.7536 0 40 1.24545 40 2.78273V39.8873H34.4345V9.50091L3.93545 40L0 36.0636L30.4991 5.56636H0.112727V0Z" fill="url(#paint0_linear_12_3834)"/>
  <defs>
    <linearGradient id="paint0_linear_12_3834" x1="37.2173" y1="2.78273" x2="0.112729" y2="39.8873" gradientUnits="userSpaceOnUse">
      <stop offset="0.521" stopColor="#EBF1F8"/>
      <stop offset="1" stopColor="white"/>
    </linearGradient>
  </defs>
</svg>
              </div>
              
              <AddButton className="xalqaro__info__cards__link" title="A’zolik +"/>
            </div>
            <div className='col mt-4'>
            <div className='d-flex align-items-center justify-content-between'>
              <p>Profile yaratish</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <path fillRule="evenodd" clipRule="evenodd" d="M0.112727 0H37.2173C38.7536 0 40 1.24545 40 2.78273V39.8873H34.4345V9.50091L3.93545 40L0 36.0636L30.4991 5.56636H0.112727V0Z" fill="url(#paint0_linear_12_3834)"/>
  <defs>
    <linearGradient id="paint0_linear_12_3834" x1="37.2173" y1="2.78273" x2="0.112729" y2="39.8873" gradientUnits="userSpaceOnUse">
      <stop offset="0.521" stopColor="#EBF1F8"/>
      <stop offset="1" stopColor="white"/>
    </linearGradient>
  </defs>
</svg>
              </div>
              
              <AddButton className="xalqaro__info__cards__link" title="Profile +"/>
            </div>
          </div>
        </div>
      </div>
      


    </>
  )
}

export default Home_main
