import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import './header_components.css'


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
        <button className='display-time'>
          { time } { alarm ? <BiAlarm /> :  <BiAlarmOff /> }
        </button>
    </>
  )

}


export default Time