import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import { createMachine } from 'xstate'
import { useMachine } from '@xstate/react'
import Calendar from './calendar'
import './header_components.css'

const Calendar_display_state =  createMachine({
  id: 'calendar_display_state',
  initial: 'display_off',
  states: {
    display_off: {
      on: {
        display_calendar_button: "display_on",
      }
    },
    display_on: {
      on: {
        display_calendar_button: "display_off",
      }
    }
  }
})




const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
  const [ current, send ] = useMachine(Calendar_display_state)

  console.log(current)
  useEffect(() => {
    const timer = setInterval(() => {      
      setTime(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
      }, 1000);              
    return () => clearInterval(timer);
  });

  return(
    <>
          <div className='display-time' onClick={() => send("display_calenday_button")} >
            { time } &nbsp; { alarm ? <BiAlarm /> :  <BiAlarmOff /> } 
          </div>
        <Calendar />
    </>
  )

}


export default Time