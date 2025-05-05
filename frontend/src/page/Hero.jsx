// Import React
import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/styles.css';

// import image
import Image1 from '../assets/Image_Swiper/Image_1.jpg';
import Image2 from '../assets/Image_Swiper/Image_2.jpg';
import Image3 from '../assets/Image_Swiper/Image_3.jpg';
import Image4 from '../assets/Image_Swiper/Image_4.jpg';
import Image5 from '../assets/Image_Swiper/Image_5.jpg';
import Image6 from '../assets/Image_Swiper/Image_6.jpg';
import Image7 from '../assets/Image_Swiper/Image_7.jpg';
import Image8 from '../assets/Image_Swiper/Image_8.png';
import Image9 from '../assets/Image_Swiper/Image_9.jpg';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Image2} alt="Image 1" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image1} alt="Image 2" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} alt="Image 3" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} alt="Image 4" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} alt="Image 5" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} alt="Image 6" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image9} alt="Image 7" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image8} alt="Image 8" className='w-full h-full object-cover' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image7} alt="Image 9" className='w-full h-full object-cover' />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;