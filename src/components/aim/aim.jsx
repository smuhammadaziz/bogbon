import React from 'react';
import './aim.css';

import aimImg from '../../assets/images/aim1.png';

function Aim() {
  return (
    <div className='aim'>
      <h2>Maqsad va vazifalari</h2>
      <div className='container'>
        <div className='aim__box'>
          <span>
            <span> {'    '} Bu</span> loyiha orqali Mesenatlik faoliyatini rivojlantirish,
            ushbu dasturiy ta’minot orqali Mesenatlik faoliyatini ochiq va shaffof tizim
            sifatida ishlashini ta’minlash. Ilm va kasb-hunarlarni o’rganish istagida
            bo’lgan, lekin bunga yetarlicha imkoniyati bo’lmagan nogiron va sog’ligida
            nuqsoni bo’lgan yoshlar, yetimlar, ota yoki onasiz ulg’ayayotgan oilalarning
            farzandlari va kam ta’minlangan oilalarning farzandlari uchun ularning
            qiziqishlari va qobiliyatlaridan kelib chiqib kasb-hunar va turli xil ilmlarni
            o’rganishlari uchun yetarli imkoniyatlarni yaratib berishdan iborat.
          </span>
          <span>
            <span>{'    '} Davlatimiz</span> va jamiyatimizning ertangi rivoji uchun zarur
            bo’lgan ushbu foydali va savobli ishga o’z hissasini qo’shmoqchi bo’lgan
            barcha befarq bo’lmagan insonlarni bir platformada jamlashdan iborat. Barcha
            vazifalar Bog’bon.edu.uz raqamli dasturi orqali ochiq va shaffof tizim
            sifatida amalga oshiriladi.
          </span>
          <span>
            <span>{'    '} Bog’bon.edu.uz</span> ijtimoiy loyihasi yordamga muhtoj bo’lgan
            yoshlar va mesenat (ilm homiylarini) bir-biri bilan bog’laydigan raqamli
            dasturiy ta’minotdir.{' '}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Aim;
