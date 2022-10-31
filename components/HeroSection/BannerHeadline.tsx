import React from 'react'

const BannerHeadline = ({ bannerHeadline, bannerDesc }) => {

  return (
    <div className='laptop:w-1/2 laptop:mt-48 laptop:ml-32
         tablet:ml-28 tablet:mt-28 mobile:mt-20'>
      <div className='bannerHeadline laptop:text-6xl tablet:text-4xl mobile:text-3xl laptop:leading-[80px] mobile:leading-[54px]'>
        <h1>{bannerHeadline}</h1>
      </div>
      <div className=''>
        {bannerDesc.length > 0 && <h3 className='bannerDesc laptop:text-3xl tablet:text-2xl mobile:text-xl'>{bannerDesc}</h3> }
      </div>
    </div>
  )
}

export default BannerHeadline