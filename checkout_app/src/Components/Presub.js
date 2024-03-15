import React from 'react'
import Leftfootui from './Leftfootui'

function Presub() {
  return (
    <>
<div className='sm:ml-0 md:ml-6 p-6 mt-24 w-96 bg-[#FBF9F7] rounded-lg'>
<div className=''>
<div className='flex space-x-12 place-content-between'>
     <p className='text-xl mt-16 font font-bold'>  Premium Reading  </p>
     <p className='text-xl mt-16'>  $0.00</p>
     </div>
    <p className=' text-wrap text-xs mt-6'> ✓  50+ page unique reading to fully understand your personality</p>
    
   <p className=' text-wrap text-xs '> ✓   Integrating Astrology, Enneagram, Human Design, Spiral Dynamics and Numerology</p>


   <p className='text-xs'> ✓  Lifetime access to your full report</p>

    </div>

<div>
    <Leftfootui/>
</div>
     </div>
   
    </>
  )
}

export default Presub
