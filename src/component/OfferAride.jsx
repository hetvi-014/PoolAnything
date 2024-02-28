import React from 'react';

const OfferAride = () => {
  return (
    <div className=''>
      <div className='bg-white py-12'>
        <div className='flex justify-between items-center'>
          <div className='h-[50%] w-[50%]'>
            <img src='https://cdn.blablacar.com/kairos/assets/images/driver-c3bdd70e6a29c6af9ef1.svg'></img>
          </div>

          <div className='text-center'>
            <h1 className='text-center font-extrabold text-6xl'>
              Driving in your car soon?
            </h1>
            <h3 className='font-semibold text-center text-2xl text-gray-400  whitespace-normal py-10'>
              Drivers, great news: your good habits are being rewarded! Benefit
              from the Carpool Bonus by carpooling. See eligibility conditions.
            </h3>

            <div className='rounded-lg flex justify-center items-center'>
              <button className='bg-blue-500 rounded-full text-white px-10 py-2'>
                offer a ride
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferAride;
