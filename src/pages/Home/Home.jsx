import React, {useState, useEffect}  from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import Button from '../../components/Button/Button';
import Suggestions from '../../components/Suggestions/Suggestions'

import Img1 from '../../assets/img1.jpg'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.jpg'
import Img5 from '../../assets/img5.jpg'
import Img6 from '../../assets/img6.jpg'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import Player from '../../components/Player/Player'
import Portfolio from '../../components/Portfolio/Portfolio'

function getLocalTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeString = `${hours}:${minutes}:${seconds}`;
    return timeString;
}

function getGreeting(time) {
    const hour = parseInt(time.split(':')[0]);
    if (hour >= 0 && hour < 12) {
        return 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        return 'Good afternoon';
    } else {
        return 'Good evening';
    }
}

const Home = () => {
  const [time, setTime] = useState(getLocalTime());
  const [greeting, setGreeting] = useState(getGreeting(time));
  const icons = [<FiGithub />, <FaLinkedin />, <BsInstagram />];

  const [buttons, setButtons] = useState([
    { id: 1, label: "About", url: "#", selected: false },
    { id: 2, label: "Projects and Services", url: "#", selected: false},
    { id: 3, label: "Contact", url: "#", selected: false },
  ]);

  const Suggesting = [
    { id: 1, name: "Abraham", img: Img1, alt: "photo" },
    { id: 2, name: "Jarbram", img: Img2, alt: "photo" },
    { id: 3, name: "Hobbits", img: Img3, alt: "photo" },
    { id: 4, name: "Idioms", img: Img4, alt: "photo" },
    { id: 5, name: "Experience", img: Img5, alt: "photo" },
    { id: 6, name: "Liked Songs", img: Img6, alt: "photo" },
  ];
  const [showResetButton, setShowResetButton] = useState(false);

  const handleButtonClick = (buttonId) => {
    setButtons(
      buttons.map((button) =>
        button.id === buttonId
          ? { ...button, selected: true }
          : { ...button, selected: false }
      )
    );
    setShowResetButton(true);
  };

  const handleReset = () => {
    setButtons(
      buttons.map((button) => ({
        ...button,
        selected: false,
      }))
    );
    setShowResetButton(false);
  };

  const selectedButton = buttons.find((button) => button.selected);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = getLocalTime();
      setTime(newTime);
      setGreeting(getGreeting(newTime));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header content={greeting} icons={icons} />
      <div className="categories-navbar">
      {showResetButton && (
        <Button key="4" visible={true} label=<GrFormClose/> onClick={handleReset} />
      )}
      {buttons.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          url={button.url}
          onClick={() => handleButtonClick(button.id)}
          selected={button.selected}
          visible={!selectedButton || selectedButton.id === button.id}
        />
      ))
    }
    </div>
    <div className='suggestions-container'>
      {
        Suggesting.map((suggesting) => (
          <Suggestions 
          key={suggesting.id} 
          name={suggesting.name} 
          img={suggesting.img} 
          />
        ))
      }
    </div>
    <Slider />
    <Player />
    <Footer />
    <Portfolio />
    </div>
  );
};

export default Home;
