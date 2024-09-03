import React from 'react';

const About = () => {
  return (
    <div className='bg-white min-h-screen'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-center items-center py-16'>
        <div className='lg:w-1/2'>
          <div className='text-center lg:text-left mb-12'>
            <p className='text-5xl lg:text-6xl text-gray-800 font-bold mb-6'>
              Welcome to Pool Anything!
            </p>
            <p className='text-lg lg:text-xl text-gray-700 font-semibold mb-8'>
              We're here to shake up the way you commute!
            </p>
            <p className='text-lg lg:text-xl text-gray-700 mb-8'>
              At Pool Anything, we believe in making transportation more
              interesting, efficient, and eco-friendly. Join us in our mission
              to transform mundane commutes into exciting adventures!
            </p>
          </div>

          <div className='text-center text-gray-700'>
            <p className='text-lg lg:text-xl mb-8'>
              We're not just about rides; we're about building communities and
              creating connections. Join Pool Anything today and be part of
              something bigger than just getting from point A to point B!
            </p>
            <p className='text-lg lg:text-xl mb-8'>
              Whether you're a daily commuter, an occasional traveler, or
              someone just looking for a new adventure, Pool Anything has
              something for you. Our platform connects people with shared
              interests and goals, making every ride an opportunity for
              meaningful connections and unforgettable experiences.
            </p>
            <p className='text-lg lg:text-xl'>
              Ready to embark on this journey with us? Sign up now and let's
              Pool Anything!
            </p>
          </div>
        </div>

        <div className='lg:w-1/2 flex justify-center items-center'>
          <img
            // className='w-60 h-60 transform rotate-12'
            className='w-90 h-90 transform '
            src='https://img.freepik.com/free-vector/carpool-concept-illustration_114360-9298.jpg?w=1060&t=st=1709187852~exp=1709188452~hmac=08ed4d6f6e7401ae8b46b3bce8d37355f75dd5d5c234aa5d593528762f2bffa7'
            alt='Pool Anything Logo'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
