import React from 'react'
import './Suggestions.css'

const Suggestions = (props) => {
  return (
    <div className='suggestions'>
            <img src={props.img} alt={props.alt}/>
            <div className='suggestions-name'>
                <h3>{props.name}</h3>
            </div>
    </div>
  )
}

export default Suggestions