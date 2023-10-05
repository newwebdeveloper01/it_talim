import React from 'react'
import LOGO from  "../../assets/logofooter.png"
import "./Footer.scss"
const Footer = () => {
  return (
    !location.pathname.includes("auth") && (
      
      
    <>
        <div className='footer'>
        <div className='footer__top d-flex justify-content-between'>
        <div className='footer__top__logo'>
            <img src={LOGO} alt='logo bor edi'/>

        </div> 
        <div className='footer__top__list d-flex justify-content-between '>
            <ul>
                <li>Ta'lim</li>
                <li>Targ'ibot</li>
                <li>Tadbirlar</li>
                <li>Targ'ibot</li>
                <li>A’zolik</li>
            </ul>
            <ul>
                <li>Targ'ibot</li>
                <li>Ta'lim</li>
                <li>Tadbirlar</li>
                <li>A’zolik</li>
                <li>Targ'ibot</li>
            </ul>
        </div> 
        <div className='footer__top__contact m-auto'>
            <div className=''>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M2 3C0.89543 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM21.518 5L12 12.713L2.482 5H21.518ZM2 19V7.183L10.7408 14.2665C11.4749 14.8614 12.5251 14.8614 13.2592 14.2665L22 7.183V19H2Z" fill="#2E3038"/>
</svg>

<a href='info@it-talim.uz'>info@it-talim.uz</a>

<svg className='ms-auto' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1 21L21 1M21 1H1M21 1V21" stroke="#184AFB" strokeWidth="2"/>
</svg>
            </div>
            <hr/>
            <div className=''>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M6.17609 1.322L9.02009 0L13.0611 7.89L10.3371 9.231C9.79909 10.49 12.4961 15.52 13.6341 15.603C13.7241 15.545 16.3051 14.275 16.3051 14.275L20.4151 22.207C20.4151 22.207 17.6511 23.561 17.5611 23.603C9.69909 27.194 -1.54191 5.345 6.17609 1.322ZM8.10509 2.596L7.08209 3.1C1.78809 5.862 11.2591 24.285 16.7301 21.786L17.7011 21.312L15.4301 16.929L14.4041 17.429C11.2411 18.976 6.14209 9.21 9.34909 7.491L10.3561 6.994L8.10509 2.596Z" fill="#2E3038"/>
</svg>

<a href='info@it-talim.uz'>+ (99)  803  7373</a>

<svg className='ms-auto' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1 21L21 1M21 1H1M21 1V21" stroke="#184AFB" strokeWidth="2"/>
</svg>
            </div>
            <hr/>

            <div className=''>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 0C6.478 0 2 4.395 2 9.815C2 15.32 6.375 19.083 12 24C17.625 19.083 22 15.32 22 9.815C22 4.395 17.522 0 12 0ZM12 18C7.581 18 4 14.418 4 10C4 5.582 7.581 2 12 2C16.419 2 20 5.582 20 10C20 14.418 16.419 18 12 18Z" fill="#2E3038"/>
</svg>

<a href='info@it-talim.uz'>Tepamasjid, 4, Olimlar</a>

<svg className='ms-auto' xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M1 21L21 1M21 1H1M21 1V21" stroke="#184AFB" strokeWidth="2"/>
</svg>
            </div>
        </div> 

        </div> 
        <div className='footer__bottom d-flex justify-content-end'>
            <a href='https://t.me/nurullayev_akbar'><div>
                <p>Telegram <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M0.5 13L12.5 1M12.5 1H0.5M12.5 1V13" stroke="white"/>
</svg></p>
            </div></a>
            <a href='https://t.me/nurullayev_akbar'><div>
                <p>Instagram <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M0.5 13L12.5 1M12.5 1H0.5M12.5 1V13" stroke="white"/>
</svg></p>
            </div></a>
            <a href='https://t.me/nurullayev_akbar'><div>
                <p>Facebook <svg xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M0.5 13L12.5 1M12.5 1H0.5M12.5 1V13" stroke="white"/>
</svg></p>
            </div></a>
        </div> 

        </div> 
    </>
    )
  )
}

export default Footer
