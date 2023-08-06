import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';
import { useLocation, useNavigate} from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineClose } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { useMusicPlayer } from '../../MusicPlayerContext';

const MusicPlayer = () => {
  const { isPlaying, setIsPlaying, currentTime, setCurrentTime, audioRef } = useMusicPlayer();
  const [duration, setDuration] = useState(0);
  const progressBarRef = useRef();

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

  const handleGoBack = () => {// Pausar la reproducción al salir del MusicPlayer
    setCurrentTime(audioRef.current.currentTime); // Almacenar el tiempo de reproducción actual antes de regresar al Player
    window.history.back()// Regresar a la vista anterior
  };

  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
  };

  const handleLoadedMetadata = (e) => {
    const duration = e.target.duration;
    setDuration(duration);
  };

  const handleProgressBarChange = () => {
    const currentTime = progressBarRef.current.value;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    audioRef.current.volume = volume;
  };

  useEffect(() => {
    setIsPlaying(true);
    audioRef.current.currentTime = currentTime;
    audioRef.current.play();
  }, []);


  return (
    <div className='musicPlayer'>
      <div className='return-btn'>
        <AiOutlineClose onClick={() => handleGoBack()} />
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
      <audio
        ref={audioRef}
        src={url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      <div className='progress-bar-container'>
      <span className='time-display'>{formatTime(currentTime)}</span>
      <input
        className='progress-bar'
        ref={progressBarRef}
        type='range'
        min='0'
        max={duration}
        step='0.01'
        value={currentTime}
        onChange={handleProgressBarChange}
      />
      <span className='time-display time-duration'>{formatTime(duration)}</span>
    </div>
      <div className='audio-player'>
        <BiSkipPrevious />
        <div className='play-pause-btn' onClick={handlePlay}>
          {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
        </div>
        <BiSkipNext />
      </div>
      <div className='volume-bar-container'>
        <input type='range' min='0' max='1' step='0.01' defaultValue='1' onChange={handleVolumeChange} />
      </div>
      <div className='lyrics-container '>
        <p className='lyrics'>{lyrics}</p>
      </div>
    </div>
  );
};

// Helper function to format time in mm:ss format
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default MusicPlayer;
