import React from 'react'
import { useRouteError} from 'react-router-dom'

const ErrorPage:React.FC = () => {
    const error:any = useRouteError(); 
     console.log(error)
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
        <h1 className='font-bold text-3xl mb-5 font-sans'>Oops!</h1>
        <p className='font-medium text-lg my-2'>Sorry an Unexpected error has occured</p>
        <p className='mt-3'><i>
            {error.statusText || error.message}
            </i></p>
    </div>
  )
}

export default ErrorPage