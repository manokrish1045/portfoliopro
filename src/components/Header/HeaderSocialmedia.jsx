import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import "./Headersocial.css"
const HeaderSocialmedia = () => {
    return (
        <div className='header_media'>
            <a href="https://www.linkedin.com" type="text" target="_blank" rel='noreferrer' className='header_media1' ><AiFillLinkedin size={20} /></a>
            <a href="https://github.com/manokrish1045" type="text" className='header_media1'><AiFillGithub size={20} /></a>

        </div>
    )
}

export default HeaderSocialmedia