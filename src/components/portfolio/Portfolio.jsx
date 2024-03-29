import React from "react";
import "./Portfolio.css";
import Vshare from "../../assests/vshare.png"
import inchat from "../../assests/inchat.png"
import blog from "../../assests/blog.png"
import blog1 from "../../assests/blog1.png"
export const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="cred">
        <p>Use this credentials to Login</p>
        <p>Email or username : myblogs@gmail.com</p>
        <p>Password : Blog@1234</p>
      </div>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_image'>
            <img src={Vshare} alt='' className="imge1"></img>
          </div>
          <h3>VShare</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/manokrish1045/client-media.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Frontend Code
            </a>
            <a
              href="https://github.com/manokrish1045/socmedia-server.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Backend code
            </a>
            <a
              href="https://vshare-media.netlify.app/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={inchat} alt='' className="imge1"></img>

          </div>
          <h3>InChat</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/manokrish1045/public.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >

              Frontend Code
            </a>
            <a
              href="https://github.com/manokrish1045/server-chat.git"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >

              Backend Code
            </a>
            <a
              href="https://inchat.netlify.app/"
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={blog1} alt='' className="imge1"></img>

          </div>
          <h3>My Blog</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/manokrish1045/final-blog.gitt' className='btn' target='_blank' rel="noreferrer" > Frontrend Code</a>
            <a href='https://github.com/manokrish1045/serverforblog.git' className='btn' target='_blank' rel="noreferrer" > Backend Code</a>
            <a href='https://manos-blog.netlify.app/' className='btn' target='_blank' rel="noreferrer" > Live Demo</a>

          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_image">
            <img src={blog} alt='' className="imge1"></img>

          </div>
          <h3>Netflix</h3>
          <div className='portfolio_item-cta'>
            <a href='https://github.com/manokrish1045/netflix.git' className='btn' target='_blank' rel="noreferrer" >Frontrend Cod </a>
            <a href='https://github.com/manokrish1045/netflix-api.git' className='btn' target='_blank' rel="noreferrer" > Backend Code</a>

            <a href='https://helpful-basbousa-ef9668.netlify.app/' className='btn' target='_blank' rel="noreferrer" > Live Demo</a>

          </div>
        </article>
        {/* <article className='portfolio_item'>
          <div className='portfolio_image'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlwNJKO1KFxbms4b_tbhTaPX8mRJ3yK625A&usqp=CAU' alt=''></img>
          </div>
          <h3>This is aportfolio item title</h3>
          <div className='portfolio_item-cta'>
            <a href='https://instagram.com' className='btn' target='_blank'> Github</a>
            <a href='https://facebook.com' className='btn' target='_blank'> Github</a>

          </div>
        </article> */}

      </div>


    </section>
  );
};
export default Portfolio;
