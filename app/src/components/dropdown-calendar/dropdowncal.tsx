import './dropdowncal.css'

const DropDownCal = () => {
    const today = new Date()
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]   
    let start_date = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
    const last_date = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
    let date_arry:any = []


    for(let i = 0; i < start_date; i++){
        if (start_date >= 7) {
            start_date =- 1
        }
        date_arry.push("0")
    }
    for(let i = 0; i <= last_date; i++){
        date_arry.push(i + 1)
    }

    return(
    <div>
        <p> { month[today.getMonth()] } &nbsp; { today.getDate() }</p>
        <p> { days[today.getDay()] } &nbsp; { today.getFullYear() } </p>
         <div className="calendar-container">
         <div className="sunday">S</div>
         <div className="monday">M</div>
         <div className="tuesday">T</div>
         <div className="wednesday">W</div>
         <div className="thursday">T</div>
         <div className="friday">F</div>
         <div className="saturday">S</div>
         { date_arry.map((element:any) => {
             if (element === today.getDate()){
                 return <div key={ element } className="calendar-current-date"> {element }</div>
             }else if(element  === "0"){
                 return <div key={ (Math.random() + 100)  }> </div>
             }else {
                 return <div key={ element }>{ element }</div>
             }                  
         })}
     </div>
    </div>
    )
}


export default DropDownCal