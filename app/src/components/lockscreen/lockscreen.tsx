import './lockscreen.css'
import { AiOutlineUser } from 'react-icons/ai'
import Time from '../time/time'



const LockScreen = () =>{


    return(

        <div>
            <div className='lockscreen-background' />
            <div className="lockscreen-time"> <Time/> </div>  
            <div className='lockscreen-user-icon-outer' />
            <AiOutlineUser className='lockscreen-user-icon-inner' />
            <div className='lockscreen-sign-in'>
                     <h2>Welcome</h2>
                     <h3> Click to unlock. </h3>
                </div>
        </div>

    )










}

export default LockScreen