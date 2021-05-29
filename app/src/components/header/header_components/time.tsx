import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import { createMachine } from 'xstate'
import Calendar from './calendar'
import './header_components.css'

const calendar_display_button_state = createMachine({
  id: 'button_toggle',
  initial: 'display_off',
  states: {
    display_off : {},
    display_on: {},
    disaply_min:{}
  }
})



const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}));

  
  useEffect(() => {
    const timer = setInterval(() => {      
      setTime(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
      }, 1000);              
    return () => clearInterval(timer);
  });

  return(
    <>
          <div className='display-time' >
            { time } &nbsp; { alarm ? <BiAlarm /> :  <BiAlarmOff /> }
          </div>
        <Calendar />
    </>
  )

}


export default Time