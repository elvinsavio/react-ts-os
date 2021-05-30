import './header.css'
import Time from './header_components/time'
import Calendar from './header_components/hover-calendar'




const Header = () => {
    return(
        <div className="header-container">
            <div className="activities">placeholder-text</div>
            <div className="time">
                <Time /> 
                <Calendar />           
            </div>
            <div className="user">placeholder-text</div>
        </div>
    )
}

export default Header