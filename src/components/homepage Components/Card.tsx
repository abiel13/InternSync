import React from 'react'


interface CardI{
    pagination:number,
    title:string,
    desc:string,
}

const Card:React.FC<CardI> = ({pagination , title , desc}) => {
  return (
    <div className='mt-6 flex gap-4 w-[100%] px-3 py-3 bg-[#f9d5d5]'>
        <div className='flex flex-col items-center gap-3' >
            <div className='w-12 h-12 font-bold rounded-full border-gray-600 flex items-center justify-center border-2'>{pagination}</div>
            <div className='w-[1px] h-[160px] bg-gray-600' />
        </div>
        <div className='flex flex-col gap-8'>
          <h2 className='font-bold tracking-widest capitalize leading-8 text-2xl'>{title}</h2>
          <p className='font-medium text-xl tracking-normal leading-loose'> {desc}</p>
            
           
        </div>
    </div>
  )
}

export default Card