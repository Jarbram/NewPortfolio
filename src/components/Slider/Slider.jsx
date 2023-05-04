import React from 'react'
import './Slider.css'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = (props) => {
  const stories = [
    
    { id:1,
      image:'https://images.pexels.com/photos/12765768/pexels-photo-12765768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt:'photo',
    },
    {
      id:2,
      image:'https://images.pexels.com/photos/14712543/pexels-photo-14712543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
      ]

  return (
    <div className='slider'>
    <div className='initial-slogan'>
        <img src='https:github.com/jarbram.png'/>
        <p className=''>Discover more about me</p>
    </div>
    <div className='slider-container'>

    <Swiper 
    modules={[ Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    loop={true}
    >
      {
        stories.map(({id,image,alt}) => (
          <SwiperSlide key={id}>
          <div className="project__img-container">
          <img src={image} alt={alt} />
          </div>
            </SwiperSlide>
        ))
      }
      
    </Swiper>
    </div>
    </div>
    )
}

export default Slider