import React from 'react'

const BannerImage = () => {
  const banners = [
    {
      id: 1,
      image: '',
      title: 'Hotel Booking',
      headline: 'Book With Us And Enjoy Your Journey!',
    }
  ]

  return (
    <div>
      <Image src="/images/hero-image.jpg" alt="hero-image" />
    </div>
  )
}

export default BannerImage