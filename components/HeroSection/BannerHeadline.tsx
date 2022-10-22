import React from 'react'

const BannerHeadline = ({ bannerHeadline, bannerDesc }) => {
  console.log(bannerHeadline, bannerDesc);
  return (
    <div className='laptop:h-96 mobile:h-20'>
      <div className='bannerHeadline laptop:text-6xl mobile:text-3xl laptop:leading-[80px] mobile:leading-[54px]'>
        <h1>{bannerHeadline}</h1>
      </div>
      <div>
        {bannerDesc.length > 0 ? (
          <h3>{bannerDesc}</h3>
        ) : (
          null
        )}
      </div>
    </div>
  )
}

export default BannerHeadline