import React from 'react'
import './Header.css'
import Content from './Content.jsx'
import My from '../../assests/myimage.png'
import HeaderSocialmedia from './HeaderSocialmedia.jsx'
const Header = () => {
    return (
        <header>
            <div className='container header_container'>
                <h5>Hi I'm</h5>
                <h1>Mano</h1>
                <h5 className='text-light'>FullStack Developer</h5>
                <Content />
                <HeaderSocialmedia />
                <div >
                    <img className='my' src={My} alt="my "></img>
                </div>
                <a href='contact' className='scroll_down'> Scroll Down</a>

            </div>
        </header>

    )
}

export default Header