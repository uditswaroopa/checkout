import React,{useState} from 'react'

function Creditcardui() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [mmyy,setMmyy]=useState("");
  const [name,setName]=useState("");

  return (
    <div className='shadow-2xl w-23 h-44   bg-white-100 rounded-lg mt-4 border border-gray-300'>

      <input
      className='w-11/12  mx-2 mt-4 border border-gray-200 rounded-sm'
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
<div className='flex mt-2'>
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
                  <div className='flex'>
                <div>

                <input
                  className='mt-2 ml-2 w-13 rounded-sm border border-gray-200'
                      type="text"
                      name=""
                      id=""
                      placeholder="MM/YY"
                      maxLength={3}
                      required
                      value={mmyy}
                      onChange={(e) => setMmyy(e.target.value)}
                    />
                </div>
                  <div>
                  <input
                  className='mt-2 ml-2 w-14n rounded-sm border border-gray-200'
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVV"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                    </div>
                  </div>
                  
</div>
<input
                  className='mt-4 ml-2 w-11/12 rounded-sm border border-gray-200'
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="Full name on Card"
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setName(e.target.value)}
                    />
<div className='border w-20 mt-4 border-blue-900 rounded-xl  text-center  '>
                    <button className='' >Pay</button>
                    </div>
                  
    </div>
  )
}

export default Creditcardui
