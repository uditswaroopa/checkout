import React from 'react'
import Creditcardui from './Creditcardui'

function Expresscheckout() {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-8 md:mr-6 relative w-96 h-auto'>
    <p className='text-4xl sm:text-wrap text-[#5F256C] font-serif-display'>Unlock Your Reading</p>
    <p className='font mt-4 text-[#C1C1C1]'>Express Checkout</p>

    <div className='flex mt-4'>
        <div className='border border-black rounded-full'>
       <p className='mx-4'> <img className='w-12 mt-1.5' src='/Group 210.png'></img></p>                 
        </div>
        <div className='border border-black rounded-full mx-3'>
        <p className='mx-4'>  <img className='w-11 h-4 mt-1.5' src='/Vector.png'></img></p>
        </div>
        <div className='border border-black rounded-full'>
      <p className='mx-4'>  <img className='w-11 h-4 mt-1.5' src='/Group 212.png'></img></p> 
        </div>
</div>

<p className='mt-4 text-[#C1C1C1]'>Or Pay With Card </p>
<div className=' left-0'>
    <Creditcardui/>
    </div>
    </div>
   
    </>
  )
}

export default Expresscheckout
