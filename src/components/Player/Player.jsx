import React from 'react'
import './Player.css'
import {FaHeart, FaPlay } from 
'react-icons/fa'
//import {FaPause} from 'react-icons/fa'
import {BsPcDisplay} from 'react-icons/bs'


const Player = () => {

  return (
    <div className='player-container'>
    
        <div className='song-container' >
          <img src='https://images.pexels.com/photos/7511802/pexels-photo-7511802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
            <div className='song-info'>
              <span className='song-name'>Song name</span>
              <span>Artist</span>
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