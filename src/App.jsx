import './App.css'
import Container from './components/Container'
import pfp from './assets/profile-picture.png'

const App=()=>{
  return(
    <div className="App">
      <div className="header-container">
        <img src={pfp} className="profile-picture" />
        <p style={{fontSize:"45px",fontWeight:"bold"}}>Mark Reece</p>
        <p>Software Engineer/Developer and Game Programmer</p>
        <p>Majoring in Computer Science, Minoring in Artifical Intelligence and Cyber Security</p>
      </div>
      
      <h1></h1>
      <Container />
    </div>
  )
}

export default App
