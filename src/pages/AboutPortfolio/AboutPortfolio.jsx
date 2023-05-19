import React from 'react'
import './AboutPortfolio.css'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import Player from '../../components/Player/Player'
import Footer from '../../components/Footer/Footer'

const AboutPortfolio = () => {
    const { id } = useParams()
    const portfolio = data.portfolio.find((item) => item.id === Number(id))
  return (
    <div className='about'>
        <div className='about-image'>
            <img src={portfolio.img} alt={portfolio.alt}/>
        </div>
        <h1>About {portfolio.name}</h1>
        <p className='description'>{portfolio.description}</p>
        <div className='button-container'>
        <a href={portfolio.github} className='btn' target="_blank">GitHub</a>
          {
            portfolio.demo && <a href={portfolio.demo} className="btn" target="_blank">Live Demo</a>  
          }
        </div>
        <Player 
        id={portfolio.id}
        img={portfolio.img}
        alt={portfolio.alt}
        song={portfolio.song}
        artist={portfolio.artist}
        url={portfolio.url}
        lyrics={portfolio.lyrics}
        />
        <Footer />
    </div>
  )
}

export default AboutPortfolio