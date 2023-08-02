import React, { useState } from 'react';
import './About.css';
import { useParams } from 'react-router-dom';
import data from '../../data/data';
import Player from '../../components/Player/Player';
import Footer from '../../components/Footer/Footer';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

const About = () => {
  const { id } = useParams();
  const suggestion = data.Suggesting.find((item) => item.id === Number(id));
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    const totalImages = suggestion.img_extra.length;
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };
  
  const prevImage = () => {
    const totalImages = suggestion.img_extra.length;
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };
  

  return (
    <div className="about">
      <h1>About {suggestion.name}</h1>
      <div className="about-image-extra">
        {suggestion.img_extra.map((image,index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            style={{ display: index === currentImage ? 'block' : 'none' }}
          />
        ))}
        <div className="slider-nav">
          <AiFillCaretLeft className="slider-nav-btn slider-nav-prev" onClick={prevImage}  />
          <AiFillCaretRight className="slider-nav-btn slider-nav-next" onClick={nextImage} />
        </div>
      </div>
      
      <p className="description">{suggestion.description}</p>

      
      <Player
        id={suggestion.id}
        img={suggestion.img}
        alt={suggestion.alt}
        song={suggestion.song}
        artist={suggestion.artist}
        url={suggestion.url}
        lyrics={suggestion.lyrics}
      />
      <Footer />
    </div>
  );
};

export default About;
