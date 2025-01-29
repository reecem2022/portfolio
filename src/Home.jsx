import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
import pfp from "./assets/profile-picture.png"

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="App">
            <div className="header-container">
                <img src={pfp} className="profile-picture" />
                <p style={{fontSize:"45px",fontWeight:"bold"}}>Mark Reece</p>
                <p>CURRENTLY UNDER CONSTRUCTION</p>
                <p>Software Engineer/Developer and Game Programmer</p>
                <p>Majoring in Computer Science, Minoring in Artifical Intelligence and Cyber Security</p>
            </div>
            <h1>See College Projects</h1>
            <button onClick={()=>navigate("/college-projects")}>Go To College Projects</button>
            <h1>See Personal Projects</h1>
            <button onClick={()=>navigate("/personal-projects")}>Go To Personal Projects</button>
        </div>
    )
}

export default Home;