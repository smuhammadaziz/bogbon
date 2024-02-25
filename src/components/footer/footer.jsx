import React from 'react';
import './footer.css';

import { NavLink } from 'react-router-dom';

// Images
import TelegramImg from '../../assets/images/telegram.svg';
import InstaImg from '../../assets/images/insta.svg';
import FacebookImg from '../../assets/images/facebook.svg';
import YoutubeImg from '../../assets/images/youtube.svg';

import logoImg from '../../assets/images/logo.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer__top'>
          <div className='footer__top__logo'>
            <NavLink to='/' className='footer__top__logo__logo'>
              <img src={logoImg} alt='bogbon main logo' />
            </NavLink>
            <p>
              Lorem ipsum, dolor sit amet <span>consectetur</span> adipisicing elit. Dolor
              minus provident cum quae. Non. <span>Lorem</span> ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className='footer__top__links'>
            <ul>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  About us
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Education
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Research
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Community
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='footer__top__social'>
            <div className='footer__top__social__address'>
              <p>Email: bogbon@mail.com</p>
              <p>Tel: +998900291088</p>
            </div>
            <div className='footer__top__social__media'>
              <ul>
                <li>
                  <a href='https://www.youtube.com' target='_blank'>
                    <img src={TelegramImg} alt='telegram icon' width='25' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com' target='_blank'>
                    <img src={InstaImg} alt='telegram icon' width='25' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com' target='_blank'>
                    <img src={YoutubeImg} alt='telegram icon' width='25' />
                  </a>
                </li>
                <li>
                  <a href='https://www.youtube.com' target='_blank'>
                    <img src={FacebookImg} alt='telegram icon' width='25' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container'>
          <p>Copyright © 2024 Bog'bon. All rights reserved.</p>
          <p>Made by Neosoft</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
