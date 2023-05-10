import React, {useState, useEffect}  from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import { BsInstagram} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {GrFormClose} from 'react-icons/gr'
import Button from '../../components/Button/Button';
import Suggestions from '../../components/Suggestions/Suggestions'
import data from '../../data/data'
import Slider from '../../components/Slider/Slider'
import Footer from '../../components/Footer/Footer'
import Player from '../../components/Player/Player'
import Portfolio from '../../components/Portfolio/Portfolio'
import Contact from '../../components/Contact/Contact'

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
        data.Suggesting.map((suggesting) => (
          <Suggestions
          id={suggesting.id}
          key={suggesting.id} 
          name={suggesting.name} 
          img={suggesting.img} 
          />
        ))
      }
    </div>
    <Slider />
    <Portfolio /> 
    <Contact />   
    <Player id="1" />
    <Footer />
    </div>
  );
};

export default Home;
