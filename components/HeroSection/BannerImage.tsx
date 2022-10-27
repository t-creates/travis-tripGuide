import React from 'react'
import Image from 'next/image'

const BannerImage = ({ image }) => {

  return (
    <div className='hero-banner-image tablet:h-auto mobile:h-96'>
      <Image src={image} alt="hero-image" layout='fill' priority />
    </div>
  )
}

export default BannerImage