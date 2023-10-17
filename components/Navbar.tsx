// Import required components.
import Image from 'next/image';
import Button from './Button';

// Define the 'Hero' component.
const Hero = () => {
  return (
    // Start of the 'Hero' section with CSS classes for styling.
    <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>

      {/* Display a div element with the class 'hero-map'. */}
      <div className='hero-map' />

      {/* Create a container for the main content with CSS styles. */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>

        {/* Display an image with specific styling. */}
        <Image
          className='absolute left-[70px] top-[-45px] w-10 lg:w-[52px]'
          src='/camp.svg'
          alt='Camp Icon'
          width={52}
          height={52}
        />

        {/* Render a title with specific styling. */}
        <h1 className='bold-52 lg:bold-88'>Camping Areas</h1>

        {/* Display a paragraph with text and styling. */}
        <p className='regular-16 mt-4 text-gray-30 xl:max-w-[500px]'>
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible
          beauty of nature. We can help you on an adventure around the world in just one app.
        </p>

        {/* Display a row of star icons representing a rating. */}
        <div className='my-11 flex flex-wrap gap-4'>
          <div className='flex items-center gap-2'>
            {Array(5).fill(1).map((_, index) => (
              <Image
                src='/star.svg'
                key={index}
                alt='Star'
                width={28}
                height={28}
              />
            ))}
          </div>

          {/* Show the number of reviews along with a label. */}
          <p className='bold-18 lg:bold-20 text-blue-70'>
            126k
            <span className='regular-18 lg:regular-20 ml-1'>
              Great Reviews!
            </span>
          </p>
        </div>

        {/* Display two buttons for downloading the app */}
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
          <Button
            type='button'
            title='Download App'
            variant='btn_green'
          />

          <Button
            type='button'
            title='How We Work'
            icon='/play.svg'
            variant='btn_white_text'
          />
        </div>
      </div>

      {/* Create a container for location and distance information. */}
      <div className='relative flex flex-1 items-start'>
        <div className='flex relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>

          {/* Display location information. */}
          <div className='flex flex-col '>
            <div className='flexBetween'>
              <p className='regular-16 text-gray-20'>
                Location
              </p>
              <Image
                src='/close.svg'
                alt='Close'
                width={22}
                height={22}
                className='cursor-pointer'
              />
            </div>
            <p className='bold-20 text-white'>
              Aguas Calientes
            </p>
          </div>

          {/* Display distance and elevation information. */}
          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>
                Distance
              </p>
              <p className='bold-20 text-white'>
                142 km
              </p>
            </div>

            <div className='flex flex-col'>
              <p className='regular-16 block text-gray-20'>
                Elevation
              </p>
              <p className='bold-20 text-white'>
                3.020 km
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Export the 'Hero' component as the default export.
export default Hero;
