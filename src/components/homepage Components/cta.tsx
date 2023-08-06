import React from 'react'

const Cta:React.FC = () => {
  return (
    <div className='px-3 mt-[4rem] min-h-[70vh] flex items-center justify-center w-full'>
        <div className="bg-black flex flex-col px-6 py-[2rem] w-full text-white rounded-3xl">
<h1 className='text-center text-[2.3rem] '>The right talent makes all the differnce</h1>
<p className='text-center mt-[3rem] text-xl'>Tap into our large pool of top African tech talent globally.</p>
   <div className='w-full text-center'>
   <button className='text-lg mt-[3rem] font-normal text-black bg-white rounded-full px-4 py-5'>Hire an Intern Now</button>
   </div>
        </div>
    </div>
  )
}

export default Cta