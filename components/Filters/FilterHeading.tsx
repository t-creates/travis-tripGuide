import React from 'react'

interface iFilterHeading {
  children: string
}

const FilterHeading = ({ children }: iFilterHeading) => {
  return (
    <>
      <h4 className='dmSans font-medium text-[18px] leading-[23px] text-[#333333] mb-4'>
        {children}
      </h4>
    </>
  )
}

export default FilterHeading