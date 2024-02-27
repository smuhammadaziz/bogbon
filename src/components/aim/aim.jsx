import React from 'react';
import './aim.css';

import aimImg from '../../assets/images/aim1.png';

function Aim() {
  return (
    <div className='aim'>
      <h2>Loyiha maqsadi</h2>
      <div className='container'>
        <div className='aim__box'>
          <img src={aimImg} alt='aim image for bogbon' width='250' />
          <p>
            Metsenatlik faoliyatini rivojlantirish, yordamga muhtoj bo'lgan yoshlarga
            yordam berish va bilim olishi uchun imkoniyatlar yaratish
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aim;
