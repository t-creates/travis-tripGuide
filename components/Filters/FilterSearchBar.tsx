import React, { Children, useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

interface iFilterSearchBar {
  children: any

}

const FilterSearchBar = ({ children }: iFilterSearchBar) => {
  const [query, setQuery] = useState('');
  // const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // dispatch(searchHotelListing(query));
    }
  };
  return (
    <div className='flex flex-col'>
      <h4 className='dmSans font-medium text-[18px] leading-[23px] text-[#333333]'>
        Search location or property
      </h4>
      <div className='mt-[14px] rounded-[10px] border-[1px] w-72 h-14 flex items-center justify-between flex-grow-0
          dmSans font-normal text-base text-[#B1B5C4] focus-within:border-[#316BFF]'>
        <label htmlFor='search'>
          <input
            type='text'
            onKeyPress={handleKeyPress}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="filterSearchBar"
            placeholder='Search location or property'
            className='border-0 w-[250px] h-full focus:outline-0 outline-none focus:ring-0'
          />
        </label>
        <div className='filterSearchBar mr-4'>
          <button onClick={() => { }} />
        </div>
      </div>
    </div>
  )
}

export default FilterSearchBar
