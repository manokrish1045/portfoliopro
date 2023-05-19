import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
const HeaderSocialmedia = () => {
    return (
        <div className='header_media'>
            <a href="https://www.linkedin.com" type="text" target="_blank" rel='noreferrer'><AiFillLinkedin /></a>
            <a href="https://github.com/manokrish1045" type="text"><AiFillGithub /></a>

        </div>
    )
}

export default HeaderSocialmedia