import logo from './logo.svg';
import './App.css';
import Expresscheckout from './Components/Expresscheckout';
import Presub from './Components/Presub';
import Footerui from './Components/Footerui';

function App() {
  return (
<>
    <div className="flex justify-center items-center mt-12 ">
  

<div className=''>
<Expresscheckout/>
</div>

  
   
    <div className='w-96'>
    <img className='absolute ml-16 mt-4 w-64 ' src='https://s3-alpha-sig.figma.com/img/7a92/d23d/8cd4265791144772cad8d156adeb2903?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EUxKz8nv8HawsFbcH9KXU0T2qb2qlp0HhjxxTMY4P5IGdGuD49wm93pPVfvlMQISK~dk4ksPqOVWUf-OCTX9mtMz5X5EZ2EH8a0N7vfNyMJU2CYZ7oPSGPax2LThpbZWh48krhbNv2olkHerFh8cyh82-p7ivJtvuXA90zz~8leZ-OMBbYF3y-mMpKFUF6Md1zPvlSwdE72T5cSSlc978JPC70AJKUpOSCKK1iDL5~29BXpGbyJmNFiAcWLQuRGKk5AQ7UyPeaX7QgH1jsMyl1cBsVNwLaecta12M9PMKZmzy0CWV3waHmdAKH6Yz~Q0i2xgRiVtGCnXUJ9cMOHHyA__'></img>
<Presub/>
</div>
    
    
    </div>
    <div className='flex justify-center items-center mt-12' >
    <Footerui/>
    </div>
    </>
  );
}

export default App;
