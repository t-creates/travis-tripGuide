import React, { useState } from 'react'
import Image from 'next/image'

import { RangeSlider, CheckBox, FilterHeading, FilterSearchBar, SeeMoreButton } from '@/components'
import { popularFilterData } from '@/constants/popularFilters'
import { propertyTypeData } from '@/constants/propertyType'
import { yourBudgetData } from '@/constants/yourBudget'
import { facilitiesData } from '@/constants/facilities'

const Filter = () => {
  const [seeMorePopularFilters, setSeeMorePopularFilters] = useState(false)
  const [seeMorePropertyTypes, setSeeMorePropertyTypes] = useState(false)
  const [seeMoreFacilities, setSeeMoreFacilities] = useState(false)

  const toggleSeeMorePopularFilters = () => {
    setSeeMorePopularFilters(prevState => !prevState)
  }

  const toggleSeeMorePropertyTypes = () => {
    setSeeMorePropertyTypes(prevState => !prevState)
  }

  const toggleSeeMoreFacilities = () => {
    setSeeMoreFacilities(prevState => !prevState)
  }

  return (
    <div className='tablet:flex flex-col w-1/4 items-center pl-[70px] pt-24'>
      <FilterSearchBar>
        Search location or property
        < Image src='/icons/MagnifyingGlass.svg' alt='Search' width={16} height={16} />
      </FilterSearchBar>
      <div>
        <div className='mt-[30px]'>
          {/* Popular Filters */}
          <FilterHeading>Popular Filters</FilterHeading>
          {seeMorePopularFilters ? (
            popularFilterData.map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          ) : (
            popularFilterData.slice(0, 4).map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          )
          }
          {!seeMorePopularFilters ? (
            <button onClick={toggleSeeMorePopularFilters} className='dmSans font-medium text-base text-[#145CE6]'>
              See More
            </button>
          ) : (
            <button onClick={toggleSeeMorePopularFilters} className='dmSans font-medium text-base text-[#145CE6]'>
              See Less
            </button>
          )
          }
        </div>
        <hr className='border-[1px] border-[#E5E5E5] mt-4 mb-[20px]' />
        {/* Price ange Slider */}
        <div>
          <RangeSlider
            initialPrice={100}
            min={50}
            max={500}
            step={1}
          />
        </div>
        <hr className='border-[1px] border-[#E5E5E5] mt-4 mb-[20px]' />
        {/* Property Type */}
        <div>
          <FilterHeading>Property Type</FilterHeading>
          {seeMorePropertyTypes ? (
            propertyTypeData.map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          ) : (
            propertyTypeData.slice(0, 3).map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          )
          }
          {!seeMorePropertyTypes ? (
            <button onClick={toggleSeeMorePropertyTypes} className='dmSans font-medium text-base text-[#145CE6]'>
              See More
            </button>
          ) : (
            <button onClick={toggleSeeMorePropertyTypes} className='dmSans font-medium text-base text-[#145CE6]'>
              See Less
            </button>
          )}
        </div>
        <hr className='border-[1px] border-[#E5E5E5] mt-4 mb-[20px]' />
        {/* Your Budget */}
        <div>
          <FilterHeading>Your Budget</FilterHeading>
          {yourBudgetData.map((item) => (
            <div key={item.id} className='mb-[18px]'>
              <CheckBox {...item} />
            </div>
          ))}
        </div>
        <hr className='border-[1px] border-[#E5E5E5] mt-4 mb-[20px]' />
        {/* Facilities */}
        <div>
          <FilterHeading>Facilities</FilterHeading>
          {seeMoreFacilities ? (
            facilitiesData.map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          ) : (
            facilitiesData.slice(0, 6).map((item) => (
              <div key={item.id} className='mb-[18px]'>
                <CheckBox {...item} />
              </div>
            ))
          )
          }
          {!seeMoreFacilities ? (
            <button onClick={toggleSeeMoreFacilities} className='dmSans font-medium text-base text-[#145CE6]'>
              See More
            </button>
          ) : (
            <button onClick={toggleSeeMoreFacilities} className='dmSans font-medium text-base text-[#145CE6]'>
              See Less
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Filter