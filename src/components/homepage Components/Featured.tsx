import React from 'react'

const Featured:React.FC = () => {
  return (
    <div className='mt-8 min-h-[80vh] md:min-h-screen md:mt-[5rem] px-3'>
<div className='w-full md:text-center mt-[4rem]'>
    <h3 className='font-medium text-3xl tracking-wider leading-9 mb-4'>Featured Talents</h3>
    <p className='font-light capitalise text-2xl'>Meet some amazing Developers that are already hired</p>
    <button className='bg-black py-5 px-5 tracking-wide rounded-full cursor-pointer text-white font-bold mt-9'>
        Join InternSync Now
    </button>
</div>
    </div>
  )
}

export default Featured 