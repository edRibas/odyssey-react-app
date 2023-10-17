// Import the 'FEATURES' constant from the '@/constants' module, the 'Image' component from 'next/image', and 'React'.
import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

// Define a functional component called 'Features'.
const Features = () => {
  return (
    // Render a section with a background image and various CSS classes for styling.
    <section className='flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='flex max-container padding-container relative w-full justify-end'>

        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/phone.png'
            alt='Phone'
            width={440}
            height={1000}
            className='feature-phone'
          />
        </div>

        <div className='z-20 flex w-full flex-col lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='Camp'
              width={52}
              height={52}
              className='absolute left-[25px] top-[-40px] w-10 lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>
              Our Features
            </h2>
          </div>

          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
            {/* Render a list of feature items based on the 'FEATURES' constant. */}
            {FEATURES.map((feature) => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

// Define a type called 'FeatureItem' to specify the expected properties for feature items.
type FeatureItem = {
  title: string; // Feature title.
  icon: string; // Icon URL.
  description: string; // Feature description.
}

// Define a functional component called 'FeatureItem' for rendering individual feature items.
const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className='flex w-full flex-1 flex-col items-start'>
      <div className='rounded-full p-4 lg:p-7 bg-green-50'>
        {/* Render an icon image for the feature. */}
        <Image
          src={icon}
          alt='Map'
          width={30}
          height={30}
        />
      </div>

      <h2 className='bold-20 mt-5 lg:bold-32 capitalize'>
        {title}
      </h2>
      <p className='regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  );
}

// Export the 'Features' component as the default export for this module.
export default Features;
