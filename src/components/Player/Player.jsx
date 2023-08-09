import React, { useState, useEffect } from 'react';
import './Player.css';
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import { BsPcDisplay } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { useMusicPlayer } from '../../MusicPlayerContext';

const Player = (props) => {
  const { isPlaying, setIsPlaying, audioRef, currentTime, setCurrentTime } = useMusicPlayer();
  const [expanded, setExpanded] = useState(false);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const progressBarRef = React.createRef();

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Update time in real-time
  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };
  
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
    }
  
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [audioRef, setCurrentTime]);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const handleProgressBarChange = () => {
    const currentTime = progressBarRef.current.value;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime);
  };

  const handleVolumeChange = (e) => {
    const volume = e.target.value;
    audioRef.current.volume = volume;
    setVolume(volume);
  };

  useEffect(() => {
    setVolume(audioRef.current.volume);
  }, []);

  return (
    <div className={`player-container ${expanded ? 'expanded' : ''}`}>
      <div className='song-container' onClick={toggleExpanded}>
        <div className='song-img' >
          <img src={props.img} alt={props.alt} />
        </div>
        <div className='song-info'>
          <span className='song-name'>{props.song}</span>
        </div>
      </div>
      {!expanded && ( <div className='player-controls'>
          <BsPcDisplay />
          <FaHeart />
          <div className='play-pause-btn' onClick={handlePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
        </div>)}
      {expanded && (
        <div>
        {expanded && (
          <div className='return-btn'>
            <AiOutlineClose onClick={toggleExpanded} />
          </div>
        )}
        <div className='song-container-expanded' >
        <div className='song-img-expanded' onClick={toggleExpanded}>
          <img src={props.img} alt={props.alt} />
        </div>
        <div className='song-info-expanded'>
          <span className='song-name-expanded'>{props.song}</span>
        </div>
      </div>
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
              {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
            <BiSkipNext />
          </div>
          <div className='volume-bar-container'>
            <input type='range' min='0' max='1' step='0.01' value={volume} onChange={handleVolumeChange} />
          </div>
          <div className='lyrics-container'>
            <p className='lyrics'>{props.lyrics}</p>
          </div>
        </div>
      )}
      <audio
        ref={audioRef}
        src={props.url}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => {
          setDuration(e.target.duration);
        }}
      />
    </div>
  );
};

// Helper function to format time in mm:ss format
const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export default Player;
