import React from 'react'
import './Slider.css'
import Stories from 'react-insta-stories'


const Slider = (props) => {

  return (
    <div className='slider'>
    <div className='initial-slogan'>
        <img src='https:github.com/jarbram.png'/>
        <p className=''>Discover more about me</p>
    </div>
    <div className='slider-container'>
    <Stories
    loop
    stories={props.image}
    defaultInterval={1200}
    height={400}
    progressStyles={{display: 'none'}}
    isPaused={false}
    />
    </div>
    </div>
  )
}

export default Slider