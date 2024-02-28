import React from 'react';
import Slider from 'react-slick';

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className=''>
          <img src='../../public/car/01.jpeg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/02.jpeg' alt=''></img>
        </div>
        <div className=''>
          <img src='../../public/car/03.jpeg' alt=''></img>
        </div>
        <div className=''>
          <img src='../../public/car/04.jpeg' alt=''></img>
        </div>
      </Slider>
    </div>
  );
}
