import React, { useState } from 'react'

function Leftfootui() {


  const [convert,setConvert]=useState(0);

  function valuechanger(){
    setConvert(1);
  }
  return (
    <div>
      <div className='flex place-content-between ml-0'>
        <div className=''>
Subtotal Total
        </div>
        <div>
$0.00
        </div>
      </div>
      <div className='mt-2'>
      {
(convert==1)? <div className='border border-black w-auto  rounded-[5px]'><input className='w-10/12 h-8 '></input><button className='bg-purple-500 rounded-sm w-12'>APPLY</button></div>:(<button onClick={valuechanger}>+ Add Promotion Code</button>)
     
      }
     
      </div>
      <div className='flex place-content-between mt-2'>
        <div>
Your  Total
        </div>
        <div>
$00.00
        </div>
      </div>
    </div>
  )
}

export default Leftfootui
