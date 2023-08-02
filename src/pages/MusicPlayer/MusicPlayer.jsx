import React, { useState, useRef } from 'react';
import './MusicPlayer.css';
import { useLocation } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineClose } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  const location = useLocation();

  const img = location.state.img;
  const alt = location.state.alt;
  const song = location.state.song;
  const artist = location.state.artist;
  const url = location.state.url;
  const lyrics = location.state.lyrics;

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
    const percentage = Math.floor((100 / audioRef.current.duration) * audioRef.current.currentTime);
    progressBar.style.width = `${percentage}%`;
  };

  return (
    <div className='musicPlayer'>
      <div className='return-btn'>
        <AiOutlineClose onClick={() => window.history.back()} />
      </div>
      <div className='about-img'>
        <img src={img} alt={alt} />
      </div>
      <div className='about-song'>
        <div className='names'>
          <h1>{song}</h1>
          <p>{artist}</p>
        </div>
        <FaHeart />
      </div>
      <audio ref={audioRef} src={url} onTimeUpdate={handleTimeUpdate} onEnded={() => setIsPlaying(false)} />
      <div className='progress-bar-container'>
        <div id='progress-bar' className='progress-bar'></div>
      </div>
      <div className='audio-player'>
        <BiSkipPrevious />
        <div className='play-pause-btn' onClick={handlePlay}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </div>
        <BiSkipNext />
      </div>
      <div className='lyrics-container '>
          <p className='lyrics'>{lyrics}</p>
        </div>
    </div>
  );
};

export default MusicPlayer;
