import React from 'react';

const Advantages = () => {
  return (
    <div className='bg-white py-12 '>
      <div className='flex flex-col-10 mx-20 '>
        <div className=' flex flex-col justify-center items-center mx-10  rounded-lg '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='#A1AEB1'
            className='w-14 h-14'
          >
            <path d='M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875Z' />
            <path d='M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 0 0 1.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 0 0 1.897 1.384C6.809 12.164 9.315 12.75 12 12.75Z' />
            <path d='M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 15.914 9.315 16.5 12 16.5Z' />
            <path d='M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 0 0 1.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 0 0 1.897 1.384C6.809 19.664 9.315 20.25 12 20.25Z' />
          </svg>

          <div className='mt-4 font-bold '>
            <h2>Your pick of rides at low prices</h2>
          </div>

          <div className=' text-center text-gray-500'>
            <h3>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </h3>
          </div>
        </div>

        <div>
          <div className=' flex flex-col justify-center items-center mx-10'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-14 h-14  text-slate-400'
            >
              <path
                fillRule='evenodd'
                d='M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z'
                clipRule='evenodd'
              />
            </svg>

            <div className='mt-4 font-bold '>
              <h2>Trust who you travel with</h2>
            </div>

            <div className='text-center text-gray-500'>
              <h3>
                We take the time to get to know each of our members and bus
                partners. We check reviews, profiles and IDs, so you know who
                you’re travelling with and can book your ride at ease on our
                secure platform.
              </h3>
            </div>
          </div>
        </div>

        <div>
          <div className=' flex flex-col justify-center items-center mx-10 '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-14 h-14 text-slate-400'
            >
              <path
                fillRule='evenodd'
                d='M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z'
                clipRule='evenodd'
              />
            </svg>

            <div className='mt-4 font-bold '>
              <h2>Scroll, click, tap and go!</h2>
            </div>

            <div className='text-center text-gray-500'>
              <h3>
                Booking a ride has never been easier! Thanks to our simple app
                powered by great technology, you can book a ride close to you in
                just minutes.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
