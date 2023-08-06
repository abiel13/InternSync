import React from 'react'
import { Navbar, Hero , Sponsors , HowItWorks, Featured, Testimonial, Cta} from '../components'



const Root:React.FC = () => {
  return (
    <div >
    <Navbar />
<div className='top-[15vh]  px-3 py-2 relative -z-50 md:static md:top-[0]'>
    <Hero />
    <Sponsors />
    <HowItWorks />
    <Featured />
    <Testimonial />
    <Cta />
</div>
     

    </div>
  )
}

export default Root