import React,{useState} from 'react'

function Creditcardui() {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");
  const [mmyy,setMmyy]=useState("");
  const [name,setName]=useState("");
console.log("typeof", typeof(cardNumber));
console.log("cardNumber",cardNumber);

let today = new Date();
let year = parseInt(today.getFullYear());
let currentyear=year%100;
console.log("newdate",currentyear);

let inputyear=mmyy.substring(3,5);
inputyear=parseInt(inputyear);
console.log("mmyy",inputyear);

let monthNumber = mmyy.substring(0,2);
monthNumber=parseInt(monthNumber); 
console.log("monthnumber", typeof monthNumber);

  return (
    <>
    {console.log(("cardnumber",cardNumber))}
    <div className='shadow-2xl w-23 h-56    bg-white-100 rounded-lg mt-4 border border-gray-300'>
<div className={`w-11/12  mx-2 mt-4 border border-gray-300 rounded-sm input flex ${((cardNumber.length<20)&& (cardNumber.length!= 0)) ? "focus: border border-red-500" : ""}  `}>

      <input
      className={` w-11/12  rounded-sm input focus:outline-none p-2`}
                    type="text"
                    name="card_number"
                    id="card_number"
                    placeholder="1234 1234 1234 1234"
                    required
                    maxLength={24}
                    value={cardNumber
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />

{(cardNumber=="")?<div className='flex mr-3'>
<img className='h-10' src='visa.svg'></img><img className='h-10' src='newmas.svg'></img><img className='h-10 mr-10' src='amex.svg'></img>

</div>:""}
{( cardNumber.substring(0, 1)=="4")?<img className='h-10 mr-2' src='visasolid.svg'></img>:""}
{((cardNumber.substring(0,2)=="51") || (cardNumber.substring(0,2)=="55"))?<img className='h-10 mr-2' src='mastersolid.svg'></img>:""}
{ ( (cardNumber.substring(0,2)=="34") || (cardNumber.substring(0,2)=="37"))?<img className='h-10 mr-2' src='amexsolid.svg'></img>:""}
{ ( (cardNumber.substring(0,2)=="36") )?<img className='h-10 mr-2' src='dinnerclub.svg'></img>:""}

{((cardNumber=="")||( cardNumber.substring(0, 1)=="4")|| (cardNumber.substring(0,2)=="51") || (cardNumber.substring(0,2)=="55")||(cardNumber.substring(0,2)=="34") || (cardNumber.substring(0,2)=="37")||(cardNumber.substring(0,2)=="36"))?"":<img className='h-10 mt-1' src='./idangericom.svg'></img>}
                  </div>
                  <div >{(cardNumber.length<16)&& (cardNumber.length!= 0)?<p className='text-xs m-0 p-0 ml-2.5 text-red-500'>your card is incomplete</p>:<p></p>}</div>
<div className='flex mt-2'>
<div>

                  </div>
                  <div className='flex '>
                <div>

                <input
                  className={`p-2 ml-2 w-13 rounded-sm border border-gray-300 focus:outline-none ${((monthNumber > 12) ||(inputyear < currentyear) ) ? "focus: border border-red-500" :""} `}
                      type="text"
                      name=""
                      id=""
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      value={mmyy.replace(/\D/g, '') 
                    .replace(/(\d{2})(\d{1,3})/, '$1/$2') 
                    .slice(0, 5) }
                      onChange={(e) => setMmyy(e.target.value)}
                    />
                </div>
                  <div className=''>
                  <input
                  className={`p-2  ml-2 w-5/6  rounded-sm border border-gray-300 focus:outline-none ${((cvc.length < 3)&& (cvc.length!= 0)) ? "focus:border-red-500" : ""}`}
                      type="text"
                      name="cvc"
                      id="cvc"
                      placeholder="CVV                      "
                      maxLength={((cardNumber.substring(0,2)=="34") || (cardNumber.substring(0,2)=="37"))? 5 : 3}
                      required
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                   
                    </div>
                  </div>
                  
</div>

<input
                  className='mt-4 p-2 ml-2 w-11/12 rounded-sm border border-gray-300 focus:outline-none'
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
