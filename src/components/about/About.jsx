import React from 'react'
import './About.css'
import My from '../../assests/myimage.png'
import { FaAward } from 'react-icons/fa'
import { FcFolder } from 'react-icons/fc'
const About = () => {
  return (
    <section id='about'>
      <h3>Get To know</h3>
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
              <h3>Experience</h3>
              <h4>Fresher</h4>
            </article>
            <article className='about_card'>
              <FcFolder className='about_icon' />
              <h3>Projects</h3>
              <h4>2+</h4>
            </article>
          </div>
          <h3>Hi I'm Mano</h3>
          <p>I am a Dedicated and efficient full stack developer, having knowledges in application layers, presentation layers, and databases. Proficient in building and optimizing user-focused websites and applications. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth.</p>
          {/* <a href='#contact' className='btn btn-primary'> Let's Talk</a> */}
        </div>
      </div>


    </section>
  )
}

export default About