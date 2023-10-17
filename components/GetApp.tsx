import React from 'react';
import Button from './Button'; // Import the 'Button' component.
import Image from 'next/image';

// Define a functional component called 'GetApp'.
const GetApp = () => {
  return (
    // Render a section with various nested elements and CSS classes for styling.
    <section className='flexCenter w-full flex-col pb-[100px]'>
      <div className='get-app'>

        <div className='z-20 flex w-full flex-1 flex-col items-start justify-center gap-12'>
          <h2 className='bold-40 lg:bold-64 xl:max-w-[320px]'>
            Get For Free Now
          </h2>
          <p className='regular-16 text-gray-10'>
            Available on iOS and Android
          </p>

          <div className='flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row'>
            {/* Render a 'Button' component to download the app from the App Store. */}
            <Button
              type='button'
              title='Download on App Store'
              icon='/apple.svg'
              variant='btn_white'
              full
            />

            {/* Render a 'Button' component to download the app from the Play Store. */}
            <Button
              type='button'
              title='Download on Play Store'
              icon='/android.svg'
              variant='btn_dark_green_outline'
              full
            />
          </div>
        </div>

        <div className='flex flex-1 items-center justify-end'>
          <Image
            src='/phones.png'
            alt='Phones'
            width={560}
            height={880}
          />
        </div>
      </div>
    </section>
  )
}

// Export the 'GetApp' component as the default export for this module.
export default GetApp;
