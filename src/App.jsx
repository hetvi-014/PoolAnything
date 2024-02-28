import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Header from './component/Header';

import CarPool from './component/CarPool';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <main className=''>
          {/* Header */}
          <Header />
          <h1 className='text-center font-extrabold text-6xl mt-14 mb-[-5%] '>
            Your pick of rides at low prices
          </h1>
          {/* main */}
          <CarPool />

          {/* footer */}
          <Footer />
        </main>
      </LocalizationProvider>
    </>
  );
}

export default App;
