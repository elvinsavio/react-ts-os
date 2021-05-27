import './header_components.css'

const today = new Date()
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ]
let start_date = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
const last_date = new Date(today.getFullYear(), today.getMonth(), 0).getDate()
const date_arry:any = []

for(let i = 0; i < start_date; i++){
    if (start_date >= 7) {
        start_date =- 1
    }
    date_arry.push(" ")
}
for(let i = 0; i < last_date; i++){
    date_arry.push(i + 1)
}

console.log(start_date)


const Calendar = () => {

    const date_mapping = () =>{
        return date_arry.map((date:number) => <div key={Math.floor(Math.random() * 1000) }>{date}</div>);
    }

    return(
        <>
            <div className='calendar-display'>
                <p>  { month[today.getMonth()] } &nbsp; { today.getDate() }  </p>
                <p> { days[today.getDay()] } &nbsp; { today.getFullYear() } </p>
                <div className="calendar-container">
                    <div className="sunday">S</div>
                    <div className="monday">M</div>
                    <div className="tuesday">T</div>
                    <div className="wednesday">W</div>
                    <div className="thursday">T</div>
                    <div className="friday">F</div>
                    <div className="saturday">S</div>
                    { date_mapping() }
                </div>
            </div>
        </>
    )
}


export default Calendar