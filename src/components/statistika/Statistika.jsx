import React from 'react'
import './Statistika.scss'
import { AddButton, IconButton } from '../../utils/Container'
import { FiArrowRight } from 'react-icons/fi'

const Statistika = () => {
  return (
    <>
      <div className='statistika ms-auto col-9'>
        <div className='statistika__title'>
          <p>IT ta’lim uyshmasi bilan bo’ling</p>
        </div>
        <div className='statistika__info d-flex'>
          <div className='statistika__info__item'>
            <p>7+</p>
            <span>Salesel</span>
          </div>
          <div className='statistika__info__item'>
            <p>120 +</p>
            <span>Hamkor companiyalar</span>
          </div>
          <div className='statistika__info__item'>
            <p>25 +</p>
            <span>muofaqqiyatli ishlar</span>
          </div>
        </div>
        <div className='statistika__cards d-flex'>
          <div className='statistika__cards__1'></div>
          <div className='statistika__cards__2'></div>
        </div>
        <div className='statistika__dec d-flex justify-content-between align-items-center'>
          <p>
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish{' '}
          </p>
          <IconButton title='Kirish' className='statistika__dec__button' />
        </div>
        <div className='statistika__actions'>
          <span>Harakarlar</span>
          <p>
            Rossiya kartalari orqali siz mobil aloqa, kommunal xizmatlardan
            tortib PUBG, AppStore va Steam-gacha bo'lgan har qanday xizmatlar
            uchun to'g'ridan-to'g'ri ilovada to'lovni amalga oshirishingiz
            mumkin. Shuningdek, kartalaringizni OSON-ga ulab UzCARD va HUMO
            kartalariga o‘tkazmalarni amalga oshirishingiz mumkin.Rossiya
            kartalari orqali siz mobil aloqa, kommunal xizmatlardan tortib{' '}
          </p>
          <br />
          <p>
            UzMIR va Mira kartalari orqali siz mobil aloqa, kommunal
            xizmatlardan tortib PUBG, AppStore va Steam-gacha bo'lgan har qanday
            xizmatlar uchun to'g'ridan-to'g'ri ilovada to'lovni amalga
            oshirishingiz mumkin. Shuningdek, kartalaringizni OSON-ga ulab{' '}
          </p>
        </div>
        <div className='statistika__startup'>
          <div className='statistika__startup__title'>
            <p>Startuplarni qo’llash</p>
           </div>
          <div className='statistika__startup__item d-flex'>
            <div className='statistika__startup__item__img'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='121'
                height='125'
                viewBox='0 0 121 125'
                fill='none'
              >
                <path
                  d='M105.634 91.4637L86.4601 91.4486L67.26 58.193L76.8338 41.5804L96.0537 41.569L115.254 74.8245L105.634 91.4637Z'
                  fill='#231FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M76.8536 8.3139L86.4536 24.9417L67.2599 58.1935L48.0399 58.205L38.4399 41.5772L57.6336 8.32538L76.8536 8.3139Z'
                  fill='#231FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M19.2004 74.8556L28.8005 91.4834L67.2405 91.4604L76.8604 74.8212L67.2604 58.1934L28.8204 58.2164L19.2004 74.8556Z'
                  fill='#231FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
              </svg>
            </div>

            <div className='statistika__startup__item__info'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab quvvatlash
              </p>
              <IconButton
                icon={<FiArrowRight />}
                className='statistika__startup__item__info__link'
              />
            </div>
          </div>
          <div className='statistika__startup__item d-flex'>
            <div className='statistika__startup__item__img'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='98'
                height='98'
                viewBox='0 0 98 98'
                fill='none'
              >
                <path
                  d='M97.0001 48.9676L84.8931 42.0667L60.7334 55.9227V69.7782L72.7862 76.7333L97.0001 62.8773V48.9676Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M72.9726 7.93335L60.7334 14.8044V42.1823L72.9726 49L85.2667 42.1823V14.8044L72.9726 7.93335Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M25.5332 7.84787V21.4907L49 35.1333L60.7332 28.3386V14.6957L37.2666 1L25.5332 7.84787Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M1 48.9782L13.285 55.9333L37.8 42.0773V28.2214L25.515 21.2666L1 35.1223V48.9782Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M24.9725 90.0667L37.2667 83.2043V55.8624L24.9725 49L12.7334 55.8624V83.2043L24.9725 90.0667Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M73.5333 90.1948V76.5307L49.3736 62.8667L37.2666 69.672V83.336L61.4805 97L73.5333 90.1948Z'
                  fill='#39CCFB'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
              </svg>
            </div>

            <div className='statistika__startup__item__info'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab quvvatlash
              </p>
              <IconButton
                icon={<FiArrowRight />}
                className='statistika__startup__item__info__link'
              />
            </div>
          </div>
          <div className='statistika__startup__item d-flex'>
            <div className='statistika__startup__item__img'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='100'
                height='98'
                viewBox='0 0 100 98'
                fill='none'
              >
                <path
                  d='M50.4619 42.1429L26.4619 28.4286V55.8572L50.4619 69.5714V42.1429Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M50 14.7142L74 28.4285L50 42.1428L26 28.4285L50 14.7142Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M49.9863 42.1429L73.9863 28.4286V55.8572L49.9863 69.5714V42.1429Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M50.4619 69.5713L26.4619 55.8571V83.2856L50.4619 96.9999V69.5713Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M49.9863 69.5715L73.9863 55.8572V83.2857L49.9863 97V69.5715Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M74 1L98 14.7143L74 28.4286L50 14.7143L74 1Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M26.4611 28.4285L2.46094 14.7142V42.1428L26.4611 55.8571V28.4285Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M26 1L50 14.7143L26 28.4286L2 14.7143L26 1Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
                <path
                  d='M73.9863 28.4285L97.9865 14.7142V42.1428L73.9863 55.8571V28.4285Z'
                  fill='#8B1FF8'
                  stroke='#F0F0F0'
                  strokeMiterlimit='10'
                />
              </svg>
            </div>

            <div className='statistika__startup__item__info'>
              <p>
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab quvvatlash
              </p>
              <IconButton
                icon={<FiArrowRight />}
                className='statistika__startup__item__info__link'
              />
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Statistika
