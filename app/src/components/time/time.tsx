import { useState, useEffect} from 'react'


const Time = () => {
    const [ time, setTime ] = useState(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))

  
    useEffect(() => {
      const timer = setInterval(() => {      
        setTime(new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}))
        }, 1000);              
      return () => clearInterval(timer);
    });

    return(
        <p>{time}</p>
    )
}

export default Time