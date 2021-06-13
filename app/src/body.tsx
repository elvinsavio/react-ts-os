import './body.css'
import { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { GiBatteryPack } from 'react-icons/gi'
import { MdBluetooth, MdBluetoothDisabled } from 'react-icons/md'

import BluethoothDisp from './components/userbluetooth/userbluetooth'
import Time from './components/time/time'
import DropDownCal from './components/dropdown-calendar/dropdowncal'
import UserOption from './components/useroption/useroption'




export const Body = () => {


  const [ caldisp, setcaldisp] = useState(true)  
  const [ gearoptiondisp, setgearoptiondisp] = useState(true)  

  //bt-icon
  const [ bluetoothicondisp, setbluetoothicondisp ] = useState(true)
  const [ bluetoothdisp, setbluetoothdisp ] = useState(true)


  return (
    <>
      <div className='main-body'>
      
      <div className='main-header'> 
      <div className="activites" > place-holder-text </div>
      <div className="time">
          <div className='header-time' onClick={() => setcaldisp(prev => !prev)}><Time/></div>
          { caldisp ? null : <div className='drop-down-cal'><DropDownCal/></div> }
      </div>
      
      
      
      
      
      <div className="user"> 
        <div className='bluetoothwwrapper' onClick={() => setbluetoothdisp(prev => !prev)}>
          { bluetoothicondisp ? <MdBluetoothDisabled/> : <MdBluetooth/>  }
        </div>
        <GiBatteryPack className='user-icons' />
        <BsFillGearFill className='user-icons user-gear' onClick={() => setgearoptiondisp(prev => !prev)}/>
        
       <div className='dropdown-option'>
        { gearoptiondisp ? null : <UserOption /> }
        { bluetoothdisp ? null : <BluethoothDisp/> }
      </div>   
      </div>
    </div>




      <div className='main-space'>place-holder-text</div>
      </div>
      
    </>
  )
} 

