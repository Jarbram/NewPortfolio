import React from 'react'
import './Header.css'

const Header = (props) => {

return (
    <div className='header'>
    <h1>{props.content}</h1>
    <div className='header-right'>
    {
        props.icons.map((icon, index) => {
            return (
                <a key={index}>
                
                {icon}
                </a>
            )
        })
    }
    </div>
    </div>
)
}

export default Header