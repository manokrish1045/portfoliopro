import React from 'react'
import './About.css'
import My from '../../assests/myimage.png'
import { FaAward } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div>
            <img src={My} alt="about_pic" className='about_mepic'></img>
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about_card'>
              <FcFolder className='about_icon' />
              <h5>Projects</h5>
              <small>5+</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe velit delectus, alias ipsum esse tempore laborum nesciunt voluptatibus nihil nobis adipisci nam et rerum minima suscipit, optio fuga ratione placeat!</p>
          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>


    </section>
  )
}

export default About