import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import Calendar_display_state from '@states/calendar-state'
import { useMachine } from '@xstate/react'
import Calendar from './hover-calendar'
import './header_components.css'





const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
  const [ state, send ] = useMachine(Calendar_display_state)


  useEffect(() => {
    const timer = setInterval(() => {      
      setTime(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
      }, 1000);              
    return () => clearInterval(timer);
  });

  return(
    <>
          <button className='display-time' onClick={() => send('TOGGLE')} >
            { time } &nbsp; { alarm ? <BiAlarm /> :  <BiAlarmOff /> } 
          </button>
        <Calendar />
    </>
  )

}


export default Time