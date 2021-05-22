import { createMachine, interpret } from 'xstate';
import { useEffect, useState } from 'react'
import { BiAlarmOff, BiAlarm } from 'react-icons/bi'
import { useMachine } from '@xstate/react';

const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: {
       TOGGLE: 'active' 
      }
    },
    active: { on: { 
      TOGGLE: 'inactive' 
    } 
  }
  }
});



const Time = () => {
  const alarm =   null //alarm set
  const [ time, setTime ] = useState(new Date().toLocaleTimeString());
  const [ current, send ] = useMachine(toggleMachine);

  console.log(current)





  useEffect(() => {
    const timer = setInterval(() => {      
      setTime(new Date().toLocaleTimeString("en-US"))
      }, 1000);              
    return () => clearInterval(timer);
  });


  return(
    <>
      <button className='display-time' onFocus={() => {send('TOGGLE')}}>
        { time } { alarm ? <BiAlarm /> :  <BiAlarmOff /> }
      </button>
      
    </>
  )

}


export default Time