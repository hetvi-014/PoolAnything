import React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DateSelector from './DatePicker';
// import { Slide } from '@mui/material';
// import Slider from 'react-slick';
import Carousel from './Carousel';
import Advantages from './Advantages';
import About from './About';
import OfferAride from './OfferAride';

function CarPool() {
  return (
    <div className='flex flex-col '>
      <div className='flex '>
        {/* left*/}
        <div className=' justify-end items-end pb-[10%]  pt-[20%]  flex relative w-[50%]  h-[90vh]'>
          <div className=' min-h-[100%] min-w-[100%] bottom-10 '>
            <Carousel />
          </div>
        </div>
        {/* right */}
        <div className='flex  z-10 justify-center items-center w-[50%] px-4 flex-col '>
          <div className='flex flex-col items-center shadow-lg p-10 rounded-3xl gap-4 hover:shadow-2xl transition-all duration-200'>
            <div className='flex flex-col w-[100%] gap-4'>
              <TextField
                className='bg-white'
                id='outlined-basic'
                label='from'
                variant='outlined'
              />
              <TextField
                className='bg-white'
                id='outlined-basic'
                label='to'
                variant='outlined'
              />
            </div>
            <div className=''>
              <DateSelector />
            </div>
            <div className='flex flex-col bg-black w-[100%] '>
              <TextField
                id='outlined-number'
                className='fa-regular fa-user bg-white '
                label='Number'
                type='number'
                InputProps={{ inputProps: { min: 1, max: 4 } }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className='rounded-lg'>
              <button className='bg-blue-500 rounded-full text-white px-10 py-2 '>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* advantages */}
      <div>
        <Advantages />
      </div>

      {/* safety */}

      {/* offer a ride */}
      <div>
        <OfferAride />
      </div>
      {/* abput */}
      <div>
        <About />
      </div>
    </div>
  );
}

export default CarPool;
