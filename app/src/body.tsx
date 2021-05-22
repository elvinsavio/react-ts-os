import './body.css'
import Header from './components/header/header'


function Body() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="body-container">
          <div className="header"><Header /></div>
          <div className="user-space">placeholder-text</div>
          <div className="footer">placeholder-text</div>
        </div>
      </header>
    </div>
  )
}

export default Body
