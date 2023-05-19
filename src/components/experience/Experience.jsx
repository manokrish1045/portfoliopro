import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h2>What Skills I have</h2>
      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
          </div>
        </div>
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermiditae</small>
              </div>
            </article>
            <article className='experience_detail'>
              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>MongoDb</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
            <article className='experience_detail'>

              <BsPatchCheckFill className='experience_icon' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermiditae</small>
              </div>

            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience