import React from 'react';
import { Link } from 'react-router-dom';

const OfferAride = () => {
  return (
    <div className='bg-gradient-to-b from-purple-500 to-purple-700'>
      <div className='container mx-auto py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='md:w-1/2'>
            <img
              src='https://cdn.blablacar.com/kairos/assets/images/driver-c3bdd70e6a29c6af9ef1.svg'
              alt='Offer a Ride'
              className='w-full max-w-xs mx-auto md:max-w-none md:mx-0'
            />
          </div>

          <div className='md:w-1/2 text-white text-center md:text-left'>
            <h1 className='font-extrabold text-4xl md:text-6xl mb-4 md:mb-6'>
              Driving in your car soon?
            </h1>
            <h3 className='font-semibold text-lg md:text-2xl mb-8 md:mb-10'>
              Drivers, great news: your good habits are being rewarded! Benefit
              from the Carpool Bonus by carpooling. See eligibility conditions.
            </h3>

            <div>
              <Link
                to='/publish'
                className='text-white  hover:text-pink-400 font-bold '
              >
                <button className='bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300'>
                  Offer a Ride
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferAride;
