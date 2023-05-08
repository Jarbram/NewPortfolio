import React from 'react'
import './Player.css'
import {FaHeart, FaPlay } from 
'react-icons/fa'
//import {FaPause} from 'react-icons/fa'
import {BsPcDisplay} from 'react-icons/bs'
import Suggesting from '../../data/data'


const Player = (props) => {
const { id } = props
const item = Suggesting.find((item) => item.id === Number(id))

  return (
    <div className='player-container'>
    
        <div className='song-container' >
          <img src={item.img} alt={item.alt}/>
            <div className='song-info'>
              <span className='song-name'>{item.song}</span>
              <span>{item.artist}</span>
            </div>
        </div>
        <div className='player-controls'>
            <BsPcDisplay />
            <FaHeart/>
            <FaPlay/>
        </div>
    </div>
  )
}

export default Player