// Import the 'PEOPLE_URL' constant from the "@/constants" module and the 'Image' component from 'next/image'.
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

// Define an interface called 'CampProps' to specify the expected properties for the 'CampImage' component.
interface CampProps {
  backgroundImage: string; // Background image for the camp.
  title: string; // Title of the camp.
  subtitle: string; // Subtitle of the camp.
  peopleJoined: string; // Number of people who joined the camp.
}

// Define a functional component named 'CampImage' that takes in the specified 'CampProps' as its props.
const CampImage = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {

  return (
    // Render a div element with dynamic CSS classes and a background image.
    <div className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}>
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>

        <div className='flexCenter gap-4'>
          <div className='rounded-full bg-green-50 p-5'>
            {/* Render an image of a folded map. */}
            <Image
              src='/folded-map.svg'
              alt='Map'
              width={28}
              height={28}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>
              {title}
            </h4>
            <p className='regular-14 text-white'>
              {subtitle}
            </p>
          </div>
        </div>

        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {/* Render a list of people's images based on URLs from the 'PEOPLE_URL' array. */}
            {PEOPLE_URL.map((url) => (
              <Image
                src={url}
                key={url}
                alt='Person'
                width={54}
                height={54}
                className='inline-block h-10 w-10 rounded-full'
              />
            ))}
          </span>

          <p className='bold-16 md:bold-20 text-white'>
            {peopleJoined}
          </p>
        </div>

      </div>
    </div>
  )
}

// Define a functional component named 'Camp'.
const Camp = () => {
  return (
    // Render a section element with various CSS classes for styling.
    <section className='2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        {/* Render two instances of the 'CampImage' component with different props. */}
        <CampImage
          backgroundImage='bg-bg-img-1'
          title='Green Pinews Camp'
          subtitle='Lugano, Switzerland'
          peopleJoined='65+ Joined'
        />
        <CampImage
          backgroundImage='bg-bg-img-2'
          title='Mountain View'
          subtitle='Somewhere in the wilderness'
          peopleJoined='38+ Joined'
        />
      </div>

      <div className='flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6'>
        <div className='bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[640px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl'>
          <h2 className='regular-24 md:regular-32 2xl:regular-64 text-white'>
            Unsure of <strong>Your Path?</strong>
          </h2>

          <p className='regular-14 xl:regular-16 mt-5 text-white'>
            Novice climbers who are exploring unfamiliar terrain often experience anxiety about getting lost.
            That's why we're here to help and guide those who want to embark on a journey.
          </p>

          {/* Render an image of a quote. */}
          <Image
            src='/quote.svg'
            alt='Quote'
            width={180}
            height={210}
            className='camp-quote'
          />
        </div>
      </div>
    </section>
  )
}

// Export the 'Camp' component as the default export for this module.
export default Camp;
