import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {VscLibrary} from 'react-icons/vsc'
import {Link} from 'react-router-dom'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <Link to='/' className='footer-icons'>
        <AiTwotoneHome className='icon'/>
        <span>Home</span>
        </Link>
        <Link to='/search' className='footer-icons'>
        <AiOutlineSearch className='icon'/>
        <span>Search</span>
        </Link>
        <div className='footer-icons'>
        <VscLibrary className='icon'/>
        <span>Your Library</span>
        </div>
    </div>
  )
}

export default Footer