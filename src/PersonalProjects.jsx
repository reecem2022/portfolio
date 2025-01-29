import React from "react";
import { useNavigate } from "react-router-dom";
import pfp from './assets/profile-picture.png'
import './App.css'
import data from './components/personal-projects.js'
import Container from './components/Container'

const PersonalProjects = () => {
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
            <h1>Personal Projects</h1>
            <p>These personal projects are projects that I have either finished, or that are still in development.
               These projects range from software that fulfills a purpose, to video games that I'm working on.
            </p>
            <button onClick={()=>navigate("//")}>Go To Home Page</button>
            <Container data={data}/> 
        </div>
    )
}

export default PersonalProjects;