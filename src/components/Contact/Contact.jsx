import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



const Contact = () => {

  return (
    <div className='Contact'>
        <h1>Contact Me</h1>


        <div className="contact__options">
            <article className="contact__option">
                <MdOutlineMail className="contact__option-icon" />
                <h4>Email</h4>
                <h5>huacchillocastillo@gmail.com</h5><a href="mailto:huacchillocastillo@gmail.com">Send a Message</a>
            </article>

            <article className="contact__option">
                <RiMessengerLine className="contact__option-icon" />
                <h4>Messenger</h4>
                <h5>Abraham Huacchillo</h5><a href="https://m.me/abraham.huacchillo">Send a Message</a>
            </article>

            <article className="contact__option">
                <BsWhatsapp className="contact__option-icon" />
                <h4>Whats App</h4>
                <h5>+992487774</h5><a href="https://api.whatsapp.com/send?phone=992487774">Send a Message</a>
            </article>

        </div>
    </div>
  )
}

export default Contact