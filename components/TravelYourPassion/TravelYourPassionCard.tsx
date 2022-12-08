import React from 'react'
import Image from 'next/image'

interface iTravelYourPassion {
  image: any;
  title: string;
  fiveStarRating: number;
  totalReviews: number;
}

const TravelYourPassionCard = ({ image, title, fiveStarRating, totalReviews }: iTravelYourPassion) => {
  return (
    <>
      <Image src={image} alt={title} layout='fill' className='object-fill rounded-xl' />
      <div className='flex flex-col items-start mt-2 mb-5 absolute bottom-5 left-8'>
        <h1 className="text-c9 text-2xl dmSans font-semibold">{title}</h1>
        <div className='flex flex-row items-center'>
          {/* Star SVG */}
          <Image src='/icons/Star.svg' alt='Star' width={14} height={15} />
          <p className='pl-2 dmSans font-normal text-sm text-c9'>
            {fiveStarRating} ({totalReviews} reviews)
          </p>
        </div>
      </div>
    </>
  )
}

export default TravelYourPassionCard