import React from 'react';

const About = () => {
  return (
    <div className=''>
      <>
        <div className='bg-white py-12'>
          <div className='flex items-center lg:flex-row flex-col lg:mx-[14rem] gap-11'>
            <div className=' sm:text-xl text-xs font-sans font-semibold'>
              <p className=' font-bold font-serif  lg:text-3xl md:text-2xl text-xl text-black m-4 my-4  mr-[20px] pl-[10px] '>
                ABOUT US
              </p>

              <p className='lg:text-xl md:text-base sm:text-base text-sm font-sans font-semibold m-4 mb-4  text-gray-700 gap-11 '>
                Welcome to coMMuneCoNNect, where convenience meets
                sustainability! We are passionate about transforming the way
                people commute by providing a platform that connects individuals
                with a shared goal: making transportation more efficient,
                economical, and eco-friendly. Our journey began with the belief
                that every shared ride contributes to a greener planet and
                fosters a sense of community. coMMuneCoNNect is not just a
                ride-sharing platform; it's a movement towards reducing traffic
                congestion, lowering carbon emissions, and promoting a more
                sustainable lifestyle.
              </p>
            </div>

            <img
              className='w-60 h-60 '
              src='https://cdn-icons-png.flaticon.com/512/6449/6449314.png'
              alt=''
            />
          </div>
        </div>
      </>
      );
    </div>
  );
};

export default About;
