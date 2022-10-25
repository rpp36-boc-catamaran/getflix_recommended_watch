import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "../main.css";
import { Navigation, Scrollbar } from "swiper";

//const axios = require('axios');

const Recommended = (props) => {
  // axios.get('/recommended/' + props.movieId)
  // .then((response) => {
  //   console.log('response data recommended', response.data);
  // });

  //console.log('recommended comp', props.movie[0].poster_path)
  return (
    <div className='recommended'>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={6}
        spaceBetween={50}
        navigation={true}
        modules={[Navigation, Scrollbar]}
        className="mySwiper"
      >
        {
          props.movie.map(movie => {
            return (
            <SwiperSlide  className='recommended-slide'>
              <div>
                <div>
                  <img
                    src={"https://image.tmdb.org/t/p/w400" + movie.backdrop_path}
                    alt = {movie.original_title}
                  />
                </div>
                <div className="recommended-card-title">
                  {movie.original_title}
                </div>
                <div className="recommended-card-watch">
                  Watchlist Button
                </div>
              </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default Recommended;