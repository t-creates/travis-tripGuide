import React, { useState, useRef, useEffect } from 'react'

import { ExploreTheWorldCard } from '@/components'
import { exploreTheWorldData } from '@/constants/exploreTheWorld'

const ExploreTheWorld = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  // Carousel
  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='mt-36'>
      <div className='flex flex-row justify-between'>
        <div>
          <h1 className="homepageHeadline laptop:text-4xl tablet:text-3xl mobile:text-2xl p-1">Explore The World</h1>
          <p className="homepageDesc break-words mt-3 mb-12">10,788 beautiful places to go</p>
        </div>
        <div className='flex items-center mobile:hidden tablet:flex'>
          <button onClick={movePrev} disabled={isDisabled('prev')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Left Arrow */}
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.541 16.7194C15.7199 16.5417 15.8203 16.3012 15.8203 16.0506C15.8203 15.8 15.7199 15.5596 15.541 15.3818L12.1407 11.9763L15.541 8.61816C15.7199 8.44042 15.8203 8.19999 15.8203 7.94938C15.8203 7.69877 15.7199 7.45834 15.541 7.2806C15.4517 7.19169 15.3455 7.12112 15.2284 7.07296C15.1114 7.0248 14.9858 7 14.859 7C14.7322 7 14.6067 7.0248 14.4896 7.07296C14.3726 7.12112 14.2663 7.19169 14.1771 7.2806L10.1044 11.3028C10.0144 11.3909 9.94295 11.4959 9.89418 11.6115C9.84542 11.7271 9.82031 11.8511 9.82031 11.9763C9.82031 12.1015 9.84542 12.2255 9.89418 12.3411C9.94295 12.4567 10.0144 12.5616 10.1044 12.6498L14.1771 16.7194C14.2663 16.8083 14.3726 16.8789 14.4896 16.927C14.6067 16.9752 14.7322 17 14.859 17C14.9858 17 15.1114 16.9752 15.2284 16.927C15.3455 16.8789 15.4517 16.8083 15.541 16.7194Z" fill="#84878B" />
            </svg>
          </button>
          <button onClick={moveNext} disabled={isDisabled('next')}
            className='disabled:cursor-not-allowed hover:bg-c6 rounded-full' >
            {/* Right Arrow */}
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.28127 7.2806C9.10237 7.45834 9.00195 7.69877 9.00195 7.94938C9.00195 8.19999 9.10237 8.44042 9.28127 8.61816L12.6815 12.0237L9.28127 15.3818C9.10237 15.5596 9.00195 15.8 9.00195 16.0506C9.00195 16.3012 9.10237 16.5417 9.28127 16.7194C9.37056 16.8083 9.47679 16.8789 9.59384 16.927C9.71089 16.9752 9.83644 17 9.96324 17C10.09 17 10.2156 16.9752 10.3326 16.927C10.4497 16.8789 10.5559 16.8083 10.6452 16.7194L14.7178 12.6972C14.8079 12.6091 14.8793 12.5041 14.9281 12.3885C14.9768 12.2729 15.002 12.1489 15.002 12.0237C15.002 11.8985 14.9768 11.7745 14.9281 11.6589C14.8793 11.5433 14.8079 11.4384 14.7178 11.3502L10.6452 7.2806C10.5559 7.19169 10.4497 7.12112 10.3326 7.07296C10.2156 7.0248 10.09 7 9.96324 7C9.83644 7 9.71089 7.0248 9.59384 7.07296C9.47679 7.12112 9.37056 7.19169 9.28127 7.2806Z" fill="#84878B" />
            </svg>
          </button>
        </div>
      </div>
      <div ref={carousel}
        className="carousel-container relative overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x scrollbar-hide
        flex justify-between items-center laptop:flex-row mobile:flex-col max-w-7xl laptop:overflow-x-auto gap-3"
      >
        {exploreTheWorldData.map((exploreCard) => (
          <div
            key={exploreCard.id}
            className="tablet:min-w-[270px] h-[362px] mobile:min-w-[250px] mobile:h-[375px]
           relative snap-start carousel-item rounded-2xl bg-c4 p-3 flex flex-col">
            <ExploreTheWorldCard
              image={exploreCard.image}
              title={exploreCard.title}
              location={exploreCard.location}
              rooms={exploreCard.rooms}
              costPerNight={exploreCard.costPerNight}
              fiveStarRating={exploreCard.fiveStarRating}
              totalReviews={exploreCard.totalReviews}
              distanceToTownCenter={exploreCard.distanceToTownCenter}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreTheWorld