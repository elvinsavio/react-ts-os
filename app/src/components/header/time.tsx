import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import Calendar  from 'react-calendar'

const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());
  
  let yes = true
  
  
  
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
        <div className='calendar-container'> { yes ? <Calendar className='calendar-style' /> : null} </div>       
    </>
  )

}


export default Time