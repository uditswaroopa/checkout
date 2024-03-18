import React,{useState} from 'react'

function Creditcardui() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [mmyy,setMmyy]=useState("");
  const [name,setName]=useState("");
console.log("typeof", typeof(cardNumber));
console.log("cardNumber",cardNumber);
  return (
    <>
    <div className='shadow-2xl w-23 h-44    bg-white-100 rounded-lg mt-4 border border-gray-300'>
<div className='w-11/12  mx-2 mt-4 border border-gray-200 rounded-sm input flex'>

      <input
      className='  w-11/12  rounded-sm input focus:outline-none'
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="e.g. 1234 5678 9012 3456       "
                    required
                    maxLength={24}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />


{(cardNumber=="" || (cardNumber.substring(0, 1)=="4"))?<img className='h-6' src='visa.svg'></img>:""}
{(cardNumber=="" || (cardNumber.substring(0,2)=="51") || (cardNumber.substring(0,2)=="55"))?<img className='h-6' src='mastercard_new.svg'></img>:""}
{ (cardNumber=="" || (cardNumber.substring(0,2)=="34") || (cardNumber.substring(0,2)=="37"))?<img className='h-6' src='amex.svg'></img>:""}

                  </div>
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
                  className='mt-2 ml-2 w-13 rounded-sm border border-gray-200 focus:outline-none'
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
                  <div className=''>
                  <input
                  className='mt-2   ml-2 w-5/6  rounded-sm border border-gray-200 focus:outline-none'
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVV                     "
                      maxLength={3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                   
                    </div>
                  </div>
                  
</div>

<input
                  className='mt-4 ml-2 w-11/12 rounded-sm border border-gray-200 focus:outline-none'
                      type="text"
                      name=""
                      id=""
                      placeholder="Full name on Card"
                     
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    
<div className='border w-[258px] mt-4 border-blue-900 rounded-xl  items-center  text-center bg-gradient-to-r from-[#2C419A] to-[#7357A4] absolute left-14 '>
                    <button className='text-white ' >Pay</button>
                    </div>
                    

                  
    </div>
    
                    </>
  )
}

export default Creditcardui
