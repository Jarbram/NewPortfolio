import React from 'react'
import './Suggestions.css'
import {useNavigate}  from 'react-router-dom';

const Suggestions = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/about/${props.id}`);
  };
  return (
    <div className='suggestions' onClick={handleClick}>
    <div className='suggestions-img'>
    <img src={props.img} alt={props.alt}/>
    </div>
            
            <div className='suggestions-name'>
                <h3>{props.name}</h3>
            </div>
    </div>
  )
}

export default Suggestions