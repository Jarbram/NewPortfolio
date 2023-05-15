import React from 'react'
import './About.css'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import Player from '../../components/Player/Player'
import Footer from '../../components/Footer/Footer'
import {IoIosArrowBack} from 'react-icons/io'


const About = () => {
    const { id } = useParams()
    const suggestion = data.Suggesting.find((item) => item.id === Number(id))

  return (
    <div className='about'>
    <div className='back-btn'>
      <IoIosArrowBack  onClick={() => window.history.back()}/>
    </div>
        <div className='about-image'>
            <img src={suggestion.img} alt={suggestion.alt}/>
        </div>
        <h1>About {suggestion.name}</h1>
        <p className='description'>{suggestion.description}</p>
        <Player 
          id={suggestion.id}
          img={suggestion.img}
          alt={suggestion.alt}
          song={suggestion.song}
          artist={suggestion.artist}
          url={suggestion.url}
          />
        <Footer />
    </div>
  )
}

export default About