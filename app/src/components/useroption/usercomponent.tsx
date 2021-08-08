import { useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'




const Usercomponent = ({name}:any) =>{
    const [ ucompdispstate, setucompdispstate ] = useState('off')
    const handleclick = () =>{
        if (ucompdispstate === 'on'){
            setucompdispstate('off')
        }
        else{
            setucompdispstate('on')
        }
    } 
    return( 
        <>      
            <div className='user-option'>
              <p>{name}</p>
              <div className='toogleswitch'>
                  <div style={{fontSize:'15px'}}>Turn {ucompdispstate === 'on' ? 'off' : 'on' }</div>
                  <input type="checkbox" id="toggle" className="checkbox" onChange={ handleclick } />
                  <label htmlFor='toggle' className="switch"></label>
                  </div>
                  <p>Available Devices</p>
                    {
                    ucompdispstate === 'off' ? null :
                    <AiOutlineLoading className='loading-animation'/>                
                    }
              </div>
        </>
    )
}


export default Usercomponent 