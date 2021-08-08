import './body.css'
import { useState } from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { GiBatteryPack } from 'react-icons/gi'
import { GoBrowser } from 'react-icons/go'
import { MdBluetooth, MdSignalWifi4Bar } from 'react-icons/md'
import { AiOutlineChrome } from 'react-icons/ai'


import Usercomponent  from './components/useroption/usercomponent'
import Time from './components/time/time'
import DropDownCal from './components/dropdown-calendar/dropdowncal'
import UserOption from './components/useroption/useroption'




export const Body = () => {


  const [ caldisp, setcaldisp] = useState(true)  
  const [ gearoptiondisp, setgearoptiondisp] = useState(true)
  const [ wifidisp, setwifidisp] = useState(true)  
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
          <div className='bluetoothwwrapper user-icons' onClick={() => setbluetoothdisp(prev => !prev)} >
             <MdBluetooth /> 
          </div>
          <div className='bluetoothwwrapper user-icons' onClick={() => setwifidisp(prev => !prev)} >
             <MdSignalWifi4Bar /> 
          </div>
          <GiBatteryPack className='user-icons' />
          <BsFillGearFill className='user-icons user-gear' onClick={() => setgearoptiondisp(prev => !prev)}/>
          
          <div className='dropdown-option'>
            { wifidisp ? null : <Usercomponent name={'Wifi'} /> }
            { bluetoothdisp ? null : <Usercomponent name={'Bluetooth'}/> }
            { gearoptiondisp ? null : <UserOption /> }

          </div>   
          </div>
      
      
      
      
      </div>




      <div className='main-space'>
        <div className='userspace-icons'>
          
          <div>
            <button className="userspace-icons-button" onDoubleClick={() => console.log('elvin')}>
            <AiOutlineChrome style={{fontSize:'40px'}}/>
            <div className='userspace-icons-font'>Browser</div> 
            </button>
          </div>
          
          <div >
            <GoBrowser style={{fontSize:'40px'}} />
            <div className='userspace-icons-font'>Files</div> 
          </div>

        </div>  
      </div>
      d
      
      
      </div>
      
    </>
  )
} 

