import React , {useState, useRef} from 'react'
import './MusicPlayer.css'
import { useParams } from 'react-router-dom'
import Suggesting from '../../data/data'
import {FaHeart } from 
'react-icons/fa'
import {AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai'
import {BiSkipNext,BiSkipPrevious} from 'react-icons/bi'

const MusicPlayer = () => {
const { id } = useParams()
const item = Suggesting.find((item) => item.id === Number(id))
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

const handleTimeUpdate = () => {
  const progressBar = document.getElementById('progress-bar');
  const percentage = Math.floor(
    (100 / audioRef.current.duration) * audioRef.current.currentTime
  );
  progressBar.style.width = `${percentage}%`;
};



  return (
    <div className='musicPlayer'>
    <div className='about-img'>
        <img src={item.img} alt={item.alt}/>
    </div>
        <div className='about-song'>
            <div className='names'>
                <h1>{item.song}</h1>
                <p>{item.artist}</p>
            </div>
        <FaHeart/>
        </div>
        <audio ref={audioRef} src={item.url} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying}  />
        <div className="progress-bar-container">
        <div id="progress-bar" className="progress-bar"></div>
      </div>
        <div className='audio-player'>
            <BiSkipPrevious/>
            <div className="play-pause-btn" onClick={handlePlay}>
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle/>}
            </div>
            <BiSkipNext/>
        </div>
    </div>
  )
}

export default MusicPlayer