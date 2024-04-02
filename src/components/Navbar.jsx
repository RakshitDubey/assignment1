import React from 'react';

function Navbar() {
 
  return (
    <div className='bg-white shadow-md'>
      <div className='flex justify-between items-center flex-wrap'> {/* Added flex-wrap for responsiveness */}
        <div className='flex items-center w-full md:w-auto'> {/* Adjusted width for responsiveness */}
          <div className='text-black font-semibold text-lg md:text-xl m-3 md:m-5'>WiX <span className='font-normal'>Marketplace</span></div> {/* Adjusted margin for responsiveness */}
          <div className='items flex md:ml-4'> {/* Adjusted margin for responsiveness */}
            <div className='relative'>
              <div className='flex items-center cursor-pointer'>
                <span className='mr-1'>All Services</span>
                <svg viewBox='0 0 24 24' fill='currentColor' width='20' height='20' className='text-black transform transition-transform duration-200 hover:-rotate-180'>
                  <path d='M8.14644661,10.1464466 C8.34170876,9.95118446 8.65829124,9.95118446 8.85355339,10.1464466 L12.4989857,13.7981758 L16.1502401,10.1464466 C16.3455022,9.95118446 16.6620847,9.95118446 16.8573469,10.1464466 C17.052609,10.3417088 17.052609,10.6582912 16.8573469,10.8535534 L12.4989857,15.2123894 L8.14644661,10.8535534 C7.95118446,10.6582912 7.95118446,10.3417088 8.14644661,10.1464466 Z'></path>
                </svg>
              </div>
              {/* Dropdown Menu Here */}
            </div>
            <div className='ml-4 md:ml-6 cursor-pointer'>Get Hired</div> {/* Adjusted margin for responsiveness */}
          </div>
        </div>
        <div className='flex text-white bg-black p-3 md:p-6 cursor-pointer text-center mt-3 md:mt-0'>Find a Professional</div> {/* Adjusted padding and margin for responsiveness */}
      </div>
    </div>
  );
}

export default Navbar;
