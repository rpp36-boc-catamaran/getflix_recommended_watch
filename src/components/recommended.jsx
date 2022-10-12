import React, {useState}  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
//import logo from './getfilxLogo.png';

//const axios = require('axios');

//import "../main.css";

const Recommended = (props) => {
  // axios.get('/recommended/' + props.movieId)
  // .then((response) => {
  //   console.log('response data recommended', response.data);
  // });

  console.log('recommended comp', props.movies[0].poster_path)

  return (
    <div className='recommended'>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[0].poster_path}`} alt="rec0"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[1].poster_path}`} alt="rec1"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[2].poster_path}`} alt="rec2"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[3].poster_path}`} alt="rec3"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[4].poster_path}`} alt="rec4"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[5].poster_path}`} alt="rec5"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[6].poster_path}`} alt="rec6"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[7].poster_path}`} alt="rec7"/></SwiperSlide>
        <SwiperSlide><img src={`http://image.tmdb.org/t/p/w500${props.movies[8].poster_path}`} alt="rec8"/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Recommended;