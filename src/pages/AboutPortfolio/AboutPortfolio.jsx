import React from 'react'
import './AboutPortfolio.css'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import Player from '../../components/Player/Player'
import Footer from '../../components/Footer/Footer'

const AboutPortfolio = () => {
    const { id } = useParams()
    const item = data.portfolio.find((item) => item.id === Number(id))
  return (
    <div className='about'>
        <div className='about-image'>
            <img src={item.img} alt={item.alt}/>
        </div>
        <h1>About {item.name}</h1>
        <p className='description'>{item.description}</p>
        <Player id={id} />
        <Footer />
    </div>
  )
}

export default AboutPortfolio