import React from 'react'
import Creditcardui from './Creditcardui'

function Expresscheckout() {
  return (
    <>
    <div className='mr-4 relative w-96 h-auto'>
    <p className='text-4xl sm:text-wrap text-[#5F256C]'>Unlock your reading</p>
    <p className='font mt-4'>Express Checkout</p>

    <div className='flex mt-4'>
        <div className='border border-black rounded-full'>
       <p className='mx-4'> Paypal</p>                 
        </div>
        <div className='border border-black rounded-full mx-3'>
        <p className='mx-4'> Pay</p>
        </div>
        <div className='border border-black rounded-full'>
      <p className='mx-4'>  Pay</p> 
        </div>
</div>

<p className='mt-4'>Or Pay With Card </p>
<div className=' left-0'>
    <Creditcardui/>
    </div>
    </div>
   
    </>
  )
}

export default Expresscheckout
