import React from 'react'
import './Portfolio.css'
export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlwNJKO1KFxbms4b_tbhTaPX8mRJ3yK625A&usqp=CAU' alt=''></img>
          </div>
          <h3>This is aportfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'> Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlwNJKO1KFxbms4b_tbhTaPX8mRJ3yK625A&usqp=CAU' alt=''></img>
          </div>
          <h3>This is aportfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'> Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlwNJKO1KFxbms4b_tbhTaPX8mRJ3yK625A&usqp=CAU' alt=''></img>
          </div>
          <h3>This is aportfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com' className='btn' target='_blank'> Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}
export default Portfolio