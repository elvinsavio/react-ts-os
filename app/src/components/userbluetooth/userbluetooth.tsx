import './userbluetooth.css'


const BluethoothDisp = () =>{
    return( 
        <>  
            <div className='user-option'>
              <p>BlueTooth</p>
              <div className='tooglewifi'>
                  <div style={{fontSize:'15px'}}>Turn On/Off</div>
                  <input type="checkbox" id="toggle" className="checkbox" />
                  <label htmlFor='toggle' className="switch"></label>
                  </div>
                  <p>available Devices</p>
                  <div className='available-space'></div>
              </div>
        </>
    )
}

export default BluethoothDisp