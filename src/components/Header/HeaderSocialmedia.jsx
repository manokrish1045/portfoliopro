import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const HeaderSocialmedia = () => {
    return (
        <div className='header_media'>
            <a href="https://www.linkedin.com" type="text" target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
            <a href="https://www.github.com" type="text"><AiFillGithub /></a>
            <a href="https://www.instagram.com" type="text"><AiFillInstagram /></a>

        </div>
    )
}

export default HeaderSocialmedia