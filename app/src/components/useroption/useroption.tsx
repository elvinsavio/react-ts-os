import './useroption.css'
import { useState } from 'react'
import { GiBatteryPack } from 'react-icons/gi'
import { BsFillBrightnessHighFill, BsFillVolumeDownFill, BsFillVolumeMuteFill, BsFillVolumeUpFill, BsGearFill } from 'react-icons/bs'
import { FaSignOutAlt, FaPowerOff } from 'react-icons/fa'




const UserOption = (props:any) =>{
    const [brightnessvalue, setbrightnessValue] = useState<string | number >(0)
    const [volumevalue, setvolumeValve] = useState<string | number>(0)






    const volumeicons = () =>{
        if (volumevalue == 0){
            return(<BsFillVolumeMuteFill/>)
        }else if(volumevalue > 0 && volumevalue < 50 ){
            return(<BsFillVolumeDownFill/>)
        }else{
            return(<BsFillVolumeUpFill/>)
        }

    }

    return(
        <>
        <div className='user-option'>
            <div className='user-icons-container'>
                <div className='user-option-1'><BsFillBrightnessHighFill/> <div className='user-value'> { brightnessvalue } </div></div>
                <div className='user-option-2'> { volumeicons() } <div className='user-value'> { volumevalue }</div> </div>
                <div className='user-option-3'> <GiBatteryPack style={{ fontSize:'14px' }}/>  <div className='user-value'> 100 </div></div>
            </div>
        <div className='brightness-slider'>Brigthness  </div>
        <input type="range" min='0' max='100' defaultValue='0' onChange={ (e) => setbrightnessValue(e.target.value) } className="user-slider"/>
        <div className='volume-slider'>Volume</div>
        <input type="range" min='0' max='100' defaultValue="0" onChange={ (e) => setvolumeValve(e.target.value) } className="user-slider"/>
        <div className='user-icons-container'>
        <div className='user-option-1'><BsGearFill/></div>
        <div className='user-option-2'><FaPowerOff/></div>
        <div className='user-option-3'><FaSignOutAlt/></div>
        </div>
        </div>
        </>
    )
}

export default UserOption