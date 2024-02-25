import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';

import './intro.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

// Images
import Img1 from '../../assets/images/rasm1.jpg';
import Img2 from '../../assets/images/rasm2.jpg';
import Img3 from '../../assets/images/rasm3.jpg';
import Img4 from '../../assets/images/rasm4.jpg';

function Intro() {
  return (
    <div className='intro'>
      <div className='container'>
        <div className='intro_box1'>
          <h2>
            Sadaqaning afzali musulmon kishining <span>ilm</span> o‘rganib, so‘ng boshqa{' '}
            musulmon <span>birodarlariga</span> ham o‘rgatishidir.
          </h2>
        </div>

        <div className='intro_box2'>
          <Swiper
            loop={true}
            spaceBetween={30}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src={Img3} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img2} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img1} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Img4} alt='helping people image' width='650' height='380' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Intro;
