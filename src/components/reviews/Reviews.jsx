import React from 'react'
import './Reviews.css'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const Reviews = () => {
  return (
    <section id='reviews'>
      <h5>Review from clients</h5>
      <h2>Reviews</h2>
      <Swiper className='container review_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='review'>
          <div className='client_avatar'>
            <img src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg" alt="" />
          </div>
          <h5 className='_client_name'> Client Name</h5>
          <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perspiciatis consectetur enim aspernatur cupiditate consequuntur nobis labore qui molestias accusamus, quo corrupti, illo, quis dolor quas dolorem molestiae magnam modi?</small>

        </SwiperSlide>
        <SwiperSlide className='review'>
          <div className='client_avatar'>
            <img src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg" alt="" />
          </div>
          <h5 className='_client_name'> Client Name</h5>
          <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perspiciatis consectetur enim aspernatur cupiditate consequuntur nobis labore qui molestias accusamus, quo corrupti, illo, quis dolor quas dolorem molestiae magnam modi?</small>

        </SwiperSlide>
        <SwiperSlide className='review'>
          <div className='client_avatar'>
            <img src="https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg" alt="" />
          </div>
          <h5 className='_client_name'> Client Name</h5>
          <small className='client_review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam perspiciatis consectetur enim aspernatur cupiditate consequuntur nobis labore qui molestias accusamus, quo corrupti, illo, quis dolor quas dolorem molestiae magnam modi?</small>

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Reviews