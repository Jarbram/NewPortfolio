import React, { useState, useEffect } from 'react';
import './Search.css';
import Footer from '../../components/Footer/Footer';
import Player from '../../components/Player/Player';
import data from '../../data/data';

const Search = () => {
  const [selectedSong, setSelectedSong] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchFixed, setIsSearchFixed] = useState(false);


  const handleSongClick = (song) => {
    if (song.song.toLowerCase().includes(searchTerm.toLowerCase())) {
      setSelectedSong(song);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const searchElement = document.getElementById('search');
      const searchOffset = searchElement.offsetTop;
  
      setIsSearchFixed(scrollTop > searchOffset);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className='search-page'>
      <h1>Search</h1>
      <div className={`search ${isSearchFixed ? 'fixed-search' : ''}`} id="search">
        <input
          type='text'
          placeholder='What do you want to listen to?'
          className='search-input'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className='search-results'>
        {data.songs
          .filter((song) => song.song.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((song) => (
          <div key={song.id} className='result' onClick={() => handleSongClick(song)}>
            <img src={song.img} alt={song.alt} />
            <div className='result-info'>
              <h3>{song.song}</h3>
              <p>{song.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedSong && (
        <Player
          id={selectedSong.id}
          img={selectedSong.img}
          alt={selectedSong.alt}
          song={selectedSong.song}
          artist={selectedSong.artist}
          url={selectedSong.url}
          lyrics={selectedSong.lyrics}
        />
      )}

      <Footer />
    </div>
  );
};

export default Search;
