import React from 'react'
import Image from 'next/image'

const BannerImage = ({ image }) => {

  return (
    <div className='hero-banner-image'>
      <Image src={image} alt="hero-image" layout='fill' />
    </div>
  )
}

export default BannerImage