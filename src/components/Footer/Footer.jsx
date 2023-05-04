import React from 'react'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {VscLibrary} from 'react-icons/vsc'
import './Footer.css'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-icons'>
        <AiTwotoneHome className='icon'/>
        <span>Home</span>
        </div>
        <div className='footer-icons'>
        <AiOutlineSearch className='icon'/>
        <span>Search</span>
        </div>
        <div className='footer-icons'>
        <VscLibrary className='icon'/>
        <span>Your Library</span>
        </div>
    </div>
  )
}

export default Footer