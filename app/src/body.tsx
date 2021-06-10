import 'body.css'
import { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { GiBatteryPack } from 'react-icons/gi'
import Time from './components/time/time'
import DropDownCal from './components/dropdown-calendar/dropdowncal'
import UserOption from './components/useroption/useroption'




//states 


//states

export const Body = () => {


  const [caldisp, setcaldisp] = useState(true)  
  
  const handledispclick = () => {
    setcaldisp(caldisp => !caldisp)
    console.log('clicked')
  
  } 

  return (
    <>
      <div className='main-body'>
      
      <div className='main-header'> 
      <div className="activites" > place-holder-text </div>
      <div className="time">
          <div className='header-time' onClick={ handledispclick }><Time/></div>
          { caldisp ? <div className='drop-down-cal'><DropDownCal/></div> : null }
      </div>
      
      
      
      
      
      <div className="user"> 
        <GiBatteryPack className='user-battery' />
        <BsFillGearFill className='user-gear'/> <UserOption />
      </div>
    </div>




      <div className='main-space'>place-holder-text</div>
      </div>
      
    </>
  )
} 

