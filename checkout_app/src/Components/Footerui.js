import React from 'react'

function Footerui() {
  return (
    <div className='flex justify-center items-center h-full'>
    <div className='  md:grid grid-rows-3 grid-flow-col gap-4 sm:grid-cols-1'>
    <div className='row-end-3 mt-4 row-span-2 md:col-span-1'>
    <img src='./icon1.png'></img>
    <label className=' text-[#5F256C] font font-bold'>Lifetime Updates</label>
    <p className=' text-wrap mt-2 w-64 text-center'>  We are constantly extending and improving all Type Reports. Any future content we add to it you will receive for free.</p>
</div>

<div className=' row-end-3 mt-4 row-span-2 md:col-span-1 '>
<p  className=' text-wrap text-center'><img src='./icon2.png'></img></p>
<p className='text-[#5F256C] font font-bold text-wrap text-center'>30 days money back</p>
<p className=' text-wrap mt-2 w-64 text-center'>We believe that this guide will help you so much that we will give you a refund should you feel otherwise. No questions asked!</p>
</div>

<div className=' row-end-3 mt-4 row-span-2 md:col-span-1 '>
<img src='./icon3.png'></img>
<p className='text-[#5F256C] font font-bold text-wrap text-center'>Safe and Secure</p>
<p className=' text-wrap mt-2 w-64 text-center'>We don't record your payment details. They'll be sent over a secure, encrypted channel </p>
</div>
      
    </div>
    </div>
  )
}

export default Footerui
