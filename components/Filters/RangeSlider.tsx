import React, { useState, useEffect, useRef } from 'react'

interface iRangeSlider {
  initialPrice: number
  min: number
  max: number
  step: number
}

function RangeSlider({ initialPrice, min, max, step }: iRangeSlider) {
  const progress = useRef(null)
  const [priceValue, setPriceValue] = useState(initialPrice)

  const handleDesiredPrice = (e) => {
    setPriceValue(e.target.value)
  }

  useEffect(() => {
    progress.current.style.width = `${(priceValue - min) / (max - min) * 100}%`
    setPriceValue(priceValue)
  }, [priceValue])


  return (
    <div>
      <h4 className='dmSans font-medium text-[18px] leading-[23px] text-[#333333] mb-[50px]'>
        Price Range
      </h4>
      {/* Slider */}
      <div className='flex flex-row items-end justify-between'>
        <div ref={progress}>
          <input
            type='range'
            min={min}
            max={max}
            step={step}
            value={priceValue}
            className='w-[200px] mr-5'
            onChange={handleDesiredPrice}
          />
        </div>
        {/* Slider input */}
        <div>
          <input
            type='text'
            min={min}
            max={max}
            step={step}
            value={priceValue}
            onChange={handleDesiredPrice}
            className='w-[60px] h-[40px] rounded-xl border-[3px] border-[#316BFF] 
              text-center dmSans text-[16px] leading-[21px] font-bold  text-[#040812]/[0.68]'
          />
        </div>
      </div>
      <div className='flex flex-row justify-between items-center pt-6 pr-5'>
        <p className='text-c3 text-base dmSans font-medium'>$50</p>
        <p className='text-c3 text-base dmSans font-medium'>$500</p>
      </div>
    </div>
  )
}

export default RangeSlider