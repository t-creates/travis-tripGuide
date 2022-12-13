import React from 'react'

interface iCheckBox {
  title: string
}

const CheckBox = ({ title }: iCheckBox) => {
  return (
    <>
      <label className='flex flex-row gap-5 items-center'>
        <input
          type='checkbox'
          id={title}
          name=''
          value=''
          onChange={() => { }}
          className='rounded-[5px] border-[1px] border-c6 w-[20px] h-[20px] focus:ring-0 focus:ring-offset-0'
        />
        <span className='dmSans font-normal text-sm text-c3'>
          {title}
        </span>
      </label>
    </>
  )
}

export default CheckBox