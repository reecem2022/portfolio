import React from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import Header from './components/Header.jsx'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Header />
            <h1 className="options">See College Projects</h1>
            <button onClick={()=>navigate("/college-projects")}>Go To College Projects</button>
            <h1 className="options">See Personal Projects</h1>
            <button onClick={()=>navigate("/personal-projects")}>Go To Personal Projects</button>
        </div>
    )
}

export default Home;