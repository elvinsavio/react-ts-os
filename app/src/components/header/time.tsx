import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import Calendar from './inner/calendar'




const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());
  let yes = false
  useEffect(() => {
    const timer = setInterval(() => {      
      setTime(new Date().toLocaleTimeString("en-US"))
      }, 1000);              
    return () => clearInterval(timer);
  });

  return(
    <>
        <button className='display-time'>
          { time } { alarm ? <BiAlarm /> :  <BiAlarmOff /> }
        </button>
        { yes ? { Calendar } : null }
    </>
  )

}


export default Time