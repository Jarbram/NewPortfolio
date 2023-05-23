import React from 'react'
import './portfolio.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from '../../data/data';
import {useNavigate}  from 'react-router-dom';


const Portfolio = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        const portfolioItem = data.portfolio.find(item => item.id === id);
        navigate(`/aboutPortfolio/${portfolioItem.id}`);
    };
const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll:2,
}

  return (
    <div className='portfolio'>
        <h1>Made For You</h1>
        <Slider {...settings}>
            {
                data.portfolio.map((port) => (
                    <div className='portfolio-item' key={port.id} onClick={()=> handleClick(port.id)}>
                    <div className='portfolio-img'>
                        <img src={port.img} alt={port.alt} />
                    </div>
                        <h3>{port.title}</h3>
                        <p>{port.artist}</p>
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default Portfolio