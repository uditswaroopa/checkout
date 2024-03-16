import React, { useState } from 'react'

function Leftfootui() {


  const [convert,setConvert]=useState(0);
const [val,setVal]=useState(" SAVE20");
  function valuechanger(){
    setConvert(1);
  }

  function newvaluechanger(){
setConvert(5);
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
(convert==1)? <div className='border border-black w-auto  rounded-[5px]'><input className='w-10/12 h-8 focus:outline-none' value={val} ></input><button className='bg-[#5F256C] text-white rounded-sm w-12' onClick={newvaluechanger}>APPLY</button></div>:(convert!==5)?(<button onClick={valuechanger}>+ Add Promotion Code</button>):""
     
      }
      {
        (convert==5)?<div className='flex place-content-between'>
          <div className='bg-gray-300'>
SAVE 20 ×
          </div>
          <div>
-$9.90
          </div>
        </div>:""
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
