import React from 'react'

function Footui() {
  return (
    <div className=' text-wrap text-center w-100 mt-9'>
    <div className='flex justify-center items-center'>
    {[...Array(5)].map(()=>(
     
      <img src='./star.png'></img>
      
    ))
        
    }
    </div>
    <div className='w-96 text-gray-500'>
    <p className=''>
      “The Journey to Higher Self section outlines personal challenges I have recently discovered about myself.” The Technical Expert | 1-5-3</p>
      </div>
      <p className='mt-4 text-[#5F256C]'> Evan H.</p>
    </div>
  )
}

export default Footui
