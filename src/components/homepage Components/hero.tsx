import React from 'react'

const Hero:React.FC = () => {
  return (
    <div className='w-full flex-col justify-center items-center  gap-9 p-3 flex min-h-[80vh] md:min-h-[90vh] '>
<div><h1 className='text-black text-3xl leading-10 text-center md:text-7xl'>Enpower Your tech career with pracical internship and get hired</h1></div>
<div><p className='text-black text-2xl leading-9 text-center mt-2 md:text-3xl'>We help companies build top-tier teams by hiring, developing and managing tech talent remotely.</p></div>
<button className='bg-black px-5 text-white font-bold text-2xl rounded-full cursor-pointer tracking-wide py-4 '>Join InternSync Now</button>
    </div>
  )
}

export default Hero