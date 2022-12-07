import React from 'react'
import Image from 'next/image'

interface iExploreTheWorld {
  title: string;
  location: string;
  rooms: number;
  costPerNight: number;
  fiveStarRating: number;
  totalReviews: number;
  image: any;
  distanceToTownCenter: string;
}

const ExploreTheWorldCard = ({ image, fiveStarRating, totalReviews, costPerNight, title, distanceToTownCenter, location, rooms }: iExploreTheWorld) => {
  return (
    <>
      <Image src={image} alt='Explore The World' width={242} height={152} className='rounded-2xl' />
      <div className='flex flex-row items-center mt-2 mb-5'>
        {/* Star SVG */}
        {/* <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12.4532L3.43074 14.4147C2.91697 14.6971 2.31846 14.2374 2.4171 13.6362L3.09765 9.48853L0.213886 6.5502C-0.203981 6.12442 0.0251203 5.37905 0.600728 5.29162L4.59003 4.68568L6.37322 0.908861C6.6306 0.363713 7.3694 0.363713 7.62678 0.908861L9.40997 4.68568L13.3993 5.29162C13.9749 5.37905 14.204 6.12442 13.7861 6.5502L10.9023 9.48853L11.5829 13.6362C11.6815 14.2374 11.083 14.6971 10.5693 14.4147L7 12.4532Z" fill="#FFD166" />
        </svg> */}
        <Image src='/Star.svg' alt='Star' width={14} height={15} />
        <p className='pl-2 dmSans font-medium text-c3'>
          {fiveStarRating}
          <span className='dmSans font-medium text-c4'> ({totalReviews})</span>
        </p>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <h3 className='dmSans font-medium text-c3'>{title}</h3>
        <button
          className='flex flex-row justify-center items-center w-[60px] h-[30px] bg-[#316BFF] rounded-md px-5 py-2 text-c9 dmSans'>
          ${costPerNight}
        </button>
      </div>
      <h4 className='mb-5 dmSans font-medium text-c4'>{distanceToTownCenter} to Town Center</h4>
      <div className='flex flex-row items-center'>
        {/* Location SVG */}
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.00065 0.833984C6.02534 0.833984 4.13093 1.6066 2.73418 2.98186C1.33742 4.35712 0.552734 6.22238 0.552734 8.16729C0.552734 13.1173 7.11621 18.7089 7.39551 18.9473C7.56414 19.0893 7.77875 19.1673 8.00065 19.1673C8.22256 19.1673 8.43716 19.0893 8.60579 18.9473C8.93164 18.7089 15.4486 13.1173 15.4486 8.16729C15.4486 6.22238 14.6639 4.35712 13.2671 2.98186C11.8704 1.6066 9.97596 0.833984 8.00065 0.833984ZM8.00065 17.0131C6.01764 15.1798 2.41471 11.229 2.41471 8.16729C2.41471 6.70861 3.00323 5.30967 4.0508 4.27822C5.09836 3.24677 6.51917 2.66731 8.00065 2.66731C9.48213 2.66731 10.9029 3.24677 11.9505 4.27822C12.9981 5.30967 13.5866 6.70861 13.5866 8.16729C13.5866 11.229 9.98366 15.1889 8.00065 17.0131ZM8.00065 4.50064C7.26412 4.50064 6.54413 4.71568 5.93173 5.11858C5.31933 5.52148 4.84202 6.09413 4.56016 6.76413C4.2783 7.43412 4.20456 8.17136 4.34825 8.88262C4.49194 9.59388 4.84661 10.2472 5.36741 10.76C5.88822 11.2728 6.55177 11.622 7.27414 11.7635C7.99652 11.905 8.74529 11.8324 9.42575 11.5548C10.1062 11.2773 10.6878 10.8074 11.097 10.2044C11.5062 9.6014 11.7246 8.89249 11.7246 8.16729C11.7246 7.19484 11.3323 6.26221 10.6339 5.57458C9.93551 4.88695 8.98831 4.50064 8.00065 4.50064ZM8.00065 10.0006C7.63239 10.0006 7.27239 9.8931 6.96619 9.69165C6.65999 9.4902 6.42134 9.20387 6.28041 8.86888C6.13948 8.53388 6.1026 8.16526 6.17445 7.80963C6.24629 7.454 6.42363 7.12733 6.68403 6.87094C6.94444 6.61454 7.27621 6.43993 7.6374 6.36919C7.99859 6.29845 8.37297 6.33476 8.7132 6.47352C9.05343 6.61228 9.34423 6.84726 9.54883 7.14875C9.75343 7.45024 9.86263 7.8047 9.86263 8.16729C9.86263 8.65352 9.66646 9.11984 9.31727 9.46365C8.96808 9.80747 8.49448 10.0006 8.00065 10.0006Z" fill="#B1B5C4" />
        </svg>
        <p className='p-1 dmSans font-normal text-c4'>{location}</p>
      </div>
      <div className='flex flex-row items-center'>
        {/* Building SVG */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.666 5.66602H11.4993C11.7204 5.66602 11.9323 5.57822 12.0886 5.42194C12.2449 5.26566 12.3327 5.0537 12.3327 4.83268C12.3327 4.61167 12.2449 4.39971 12.0886 4.24343C11.9323 4.08715 11.7204 3.99935 11.4993 3.99935H10.666C10.445 3.99935 10.233 4.08715 10.0768 4.24343C9.92048 4.39971 9.83268 4.61167 9.83268 4.83268C9.83268 5.0537 9.92048 5.26566 10.0768 5.42194C10.233 5.57822 10.445 5.66602 10.666 5.66602ZM10.666 8.99935H11.4993C11.7204 8.99935 11.9323 8.91155 12.0886 8.75527C12.2449 8.59899 12.3327 8.38703 12.3327 8.16602C12.3327 7.945 12.2449 7.73304 12.0886 7.57676C11.9323 7.42048 11.7204 7.33268 11.4993 7.33268H10.666C10.445 7.33268 10.233 7.42048 10.0768 7.57676C9.92048 7.73304 9.83268 7.945 9.83268 8.16602C9.83268 8.38703 9.92048 8.59899 10.0768 8.75527C10.233 8.91155 10.445 8.99935 10.666 8.99935ZM6.49935 5.66602H7.33268C7.5537 5.66602 7.76566 5.57822 7.92194 5.42194C8.07822 5.26566 8.16602 5.0537 8.16602 4.83268C8.16602 4.61167 8.07822 4.39971 7.92194 4.24343C7.76566 4.08715 7.5537 3.99935 7.33268 3.99935H6.49935C6.27834 3.99935 6.06637 4.08715 5.91009 4.24343C5.75381 4.39971 5.66602 4.61167 5.66602 4.83268C5.66602 5.0537 5.75381 5.26566 5.91009 5.42194C6.06637 5.57822 6.27834 5.66602 6.49935 5.66602ZM6.49935 8.99935H7.33268C7.5537 8.99935 7.76566 8.91155 7.92194 8.75527C8.07822 8.59899 8.16602 8.38703 8.16602 8.16602C8.16602 7.945 8.07822 7.73304 7.92194 7.57676C7.76566 7.42048 7.5537 7.33268 7.33268 7.33268H6.49935C6.27834 7.33268 6.06637 7.42048 5.91009 7.57676C5.75381 7.73304 5.66602 7.945 5.66602 8.16602C5.66602 8.38703 5.75381 8.59899 5.91009 8.75527C6.06637 8.91155 6.27834 8.99935 6.49935 8.99935ZM16.4993 15.666H15.666V1.49935C15.666 1.27834 15.5782 1.06637 15.4219 0.910093C15.2657 0.753813 15.0537 0.666016 14.8327 0.666016H3.16602C2.945 0.666016 2.73304 0.753813 2.57676 0.910093C2.42048 1.06637 2.33268 1.27834 2.33268 1.49935V15.666H1.49935C1.27834 15.666 1.06637 15.7538 0.910093 15.9101C0.753813 16.0664 0.666016 16.2783 0.666016 16.4993C0.666016 16.7204 0.753813 16.9323 0.910093 17.0886C1.06637 17.2449 1.27834 17.3327 1.49935 17.3327H16.4993C16.7204 17.3327 16.9323 17.2449 17.0886 17.0886C17.2449 16.9323 17.3327 16.7204 17.3327 16.4993C17.3327 16.2783 17.2449 16.0664 17.0886 15.9101C16.9323 15.7538 16.7204 15.666 16.4993 15.666ZM9.83268 15.666H8.16602V12.3327H9.83268V15.666ZM13.9993 15.666H11.4993V11.4993C11.4993 11.2783 11.4116 11.0664 11.2553 10.9101C11.099 10.7538 10.887 10.666 10.666 10.666H7.33268C7.11167 10.666 6.89971 10.7538 6.74343 10.9101C6.58715 11.0664 6.49935 11.2783 6.49935 11.4993V15.666H3.99935V2.33268H13.9993V15.666Z" fill="#B1B5C4" />
        </svg>
        <p className='p-1 dmSans font-normal text-c4'>Rooms available: {rooms}</p>
      </div>
    </>
  )
}

export default ExploreTheWorldCard