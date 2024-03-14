import React from 'react'

function Footerui() {
  return (
    <div className='flex  w-8/12 flex justify-center items-center place-content: space-evenly;'>
    <div >
    <label className='text-align: center '>Lifetime Updates</label>
    <p className=' text-wrap mt-2 w-64'>  We are constantly extending and improving all Type Reports. Any future content we add to it you will receive for free.</p>
</div>
<div className='ml-6'>
<label>30 days money back</label>
<p className=' text-wrap mt-2 w-64 '>We believe that this guide will help you so much that we will give you a refund should you feel otherwise. No questions asked!</p>
</div>

<div className='ml-6'>
<label>Safe and Secure</label>
<p className=' text-wrap mt-2 w-64 '>We don't record your payment details. They'll be sent over a secure, encrypted channel.</p>
</div>
      
    </div>
  )
}

export default Footerui
