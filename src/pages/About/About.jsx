import React from 'react'
import './About.css'
import { useParams } from 'react-router-dom'
import Suggesting from '../../data/data'
import Player from '../../components/Player/Player'
import Footer from '../../components/Footer/Footer'


const About = () => {
    const { id } = useParams()
    const item = Suggesting.find((item) => item.id === Number(id))

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

export default About