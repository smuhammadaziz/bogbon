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
            <p>bog'bon.edu.uz</p>
          </div>
          <div className='footer__top__links'>
            <ul>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Biz haqimizda
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Yangiliklar
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Hodisalar
                </NavLink>
              </li>
              <li className='footer__top__links__item'>
                <NavLink className='footer__top__links__item' to='/'>
                  Hamkorlik
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
