import React, { useState, useRef, useEffect } from 'react';
import './Player.css';
import { FaHeart, FaPlay, FaPause } from 'react-icons/fa';
import { BsPcDisplay } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';



const Player = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/musicPlayer/${props.id}`,{
      state: {
        id: props.id,
        img: props.img,
        alt: props.alt,
        song: props.song,
        artist: props.artist,
        url: props.url,
        lyrics: props.lyrics
      }
    });
  }
  
  useEffect(() => {
    if (props.url) {
      setIsPlaying(true);
    }
  }, [props.url]);

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

  return (
    <div className='player-container'>
      <div className='song-container' onClick={handleClick} >
      <div className='song-img'>
      <img src={props.img} alt={props.alt} />
      </div>
        
        <div className='song-info'>
          <span className='song-name'>{props.song}</span>
          <span>{props.artist}</span>
        </div>
      </div>
      <div className='player-controls'>
        <BsPcDisplay />
        <FaHeart />
        <div className='play-pause-btn' onClick={handlePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
      </div>
      <audio ref={audioRef} src={props.url} onEnded={() => setIsPlaying(false)} />
    </div>
  );
};

export default Player;
