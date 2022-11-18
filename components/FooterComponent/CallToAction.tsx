import React from 'react';

const CallToAction = () => {
  return (
    <div className='flex h-[248px] w-[80%] m-auto bg-[url("/bgCallToAction.svg")] bg-[#316BFF]  rounded-2xl'>
      <div className='flex md:flex-col h-[60%] m-auto rounded-2xl gap-4'>
        <div className='flex flex-col m-auto text-white '>
          <h1 className='text-4xl font-extrabold mb-4 '>Get our pro offers</h1>
          <p className='text-lg w-[80%] '>
            Create a visual identity for your company, and an overall brand
          </p>
        </div>
        <form className='flex m-auto w-[50%] h-[40%] p-2 bg-white rounded-md '>
          <input
            className='flex flex-grow appearance-none bg-transparent border-none text-gray-700  py-1 px-2 leading-tight focus:outline-none'
            type='email'
            placeholder='Type your email here'
            aria-label='email'
          />
          <button
            className='flex align-center justify-center bg-[#353945] w-[30%] h-[95%] text-white py-[9px] px-[36px] rounded-md'
            type='button'
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;
