import React,{useState} from 'react'

function Creditcardui() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");


  return (
    <div className='shadow-sm w-23 h-32 m-4 bg-gray-100 rounded-lg'>
<label>Card Number</label>
      <input
      className='w-10/12  mx-2 mt-2'
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456"
                    required
                    maxLength={24}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
<div className='flex'>
<div>
{/* <input
      className='w-6/12  mx-2 mt-2'
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456"
                    required
                    maxLength={19}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  /> */}
                  </div>
                  <div>
                  <input
                  className='mt-2'
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="e.g. 123"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                  </div>
</div>

                  
    </div>
  )
}

export default Creditcardui
