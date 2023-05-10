import React, {useState,useRef} from 'react'
import './Player.css'
import {FaHeart, FaPlay, FaPause } from 
'react-icons/fa'
import {BsPcDisplay} from 'react-icons/bs'
import data from '../../data/data'
import { useNavigate } from 'react-router-dom'


const Player = (props) => {
const { id } = props
const item = data.Suggesting.find((item) => item.id === Number(id))
const [isPlaying, setIsPlaying] = useState(false);
const audioRef = useRef();

const handlePlay = () => {
  setIsPlaying(!isPlaying);
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
};

const navigate = useNavigate();
const handleClick = () => {
  navigate(`/musicPlayer/${id}`);
}

  return (
    <div className='player-container' >
        <div className='song-container' onClick={handleClick} >
          <img src={item.img} alt={item.alt}/>
            <div className='song-info'>
              <span className='song-name'>{item.song}</span>
              <span>{item.artist}</span>
            </div>
        </div>
        <div className='player-controls'>
            <BsPcDisplay />
            <FaHeart />
            <div className="play-pause-btn" onClick={handlePlay}>
              {isPlaying ? <FaPause /> : <FaPlay/>}
            </div>
        </div>
        <audio ref={audioRef} src={item.url}  onEnded={() => setIsPlaying}  />
      </div>
  )
}

export default Player