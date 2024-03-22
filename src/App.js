import logo from './logo.svg';
import './App.css';
import Expresscheckout from './Components/Expresscheckout';
import Presub from './Components/Presub';
import Footerui from './Components/Footerui';
import Footui from './Components/Footui';

function App() {
  return (
<>
    <div className="flex flex-col-reverse justify-center items-center mt-12   md:flex-row">
  

<div className=''>
<Expresscheckout/>
</div>

  
   
    <div className='w-96'>
    <img className='absolute ml-20 mt-4 w-64 ' src='/main_banner.png'></img>
<Presub/>
</div>
    
    
    </div>
    <div className='flex justify-center items-center mt-12'>
    <Footerui/>
    </div>
    <div className='flex justify-center items-center '>
    <Footui/>
    </div>
    </>
  );
}

export default App;
