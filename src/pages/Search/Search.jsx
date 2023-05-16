import React, { useState } from 'react';
import './Search.css';
import Footer from '../../components/Footer/Footer';
import Player from '../../components/Player/Player';
import { AiOutlineSearch } from 'react-icons/ai';
import data from '../../data/data';

const Search = () => {
  const [selectedSong, setSelectedSong] = useState(null);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <div className='search-page'>
      <h1>Search</h1>
      <div className='search'>
        <AiOutlineSearch className='search-icon' />
        <input type='text' placeholder='What do you want to listen to?' className='search-input' />
      </div>

      <div className='search-results'>
        {data.songs.map((song) => (
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
        />
      )}

      <Footer />
    </div>
  );
};

export default Search;
