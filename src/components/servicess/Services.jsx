import React from 'react'
import './Services.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_header'>
            <h3> UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_header'>
            <h3> Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_header'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsPatchCheckFill className='servive_icon' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services