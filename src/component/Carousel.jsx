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
          <img src='../../public/car/05.jpg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/06.jpg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/08.jpg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/07.jpg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/09.jpg' alt='car img'></img>
        </div>
        <div className=''>
          <img src='../../public/car/11.jpg' alt='car img'></img>
        </div>
      </Slider>
    </div>
  );
}
