import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer'> Mano</a>
            <ul className='foo_links'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#reviews">Reviews</a></li>
            </ul>
            <div className='foo_socials'>
                <a href="https://facebook.com"><BsFacebook /></a>
                <a href="https://instagram.com"><AiOutlineInstagram /></a>
                <a href="https://github.com"><AiFillGithub /></a>

            </div>
        </footer>
    )
}

export default Footer