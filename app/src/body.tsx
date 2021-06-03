import 'body.css'
import { useState } from 'react'
import Time from './components/time/time'
import LockScreen from './components/lockscreen/lockscreen'
import DropDownCal from './components/dropdown-calendar/dropdowncal'


export const Body = () => {

  const [lockstate, setlockstate ] = useState(true)
  const [scrchange, setscrchange ] = useState(true)
  const [caldisp, setcaldisp] = useState(true)
  
  const handllockclick = () =>{
      setlockstate(
          prev => !prev
      )
      setTimeout(function () {
        setscrchange(prev => !prev)
       }, 2000);
  }

  const handledispclick = () => {
    setcaldisp(
      prev => !prev
  )}





    return (

      <>
        { !scrchange ? 
        <div className={ lockstate ? "lockscreen" : 'lockscreen-unlocked'} onClick={ handllockclick }>
          <LockScreen />
        </div>
        :
       <div className='main-body'>
         
         <div className='main-header'> 
          <div className="activites" > place-holder-text </div>
          <div className="time">
             <div className='header-time' onClick={ handledispclick }><Time/></div>
             { caldisp ? <div className='drop-down-cal'><DropDownCal/></div> : null }
          </div>
          <div className="user"> place-holder-text</div>
        
        
         </div>
          <div className='main-space'>place-holder-text</div>
       </div>
        }
      </>
  )
} 

