import React from "react";
import { useNavigate } from "react-router-dom";
import pfp from './assets/profile-picture.png'
import './App.css'
import data from './components/college-projects.js'
import Container from './components/Container'

const CollegeProjects = () => {
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
            <h1>College Projects</h1>
            <p>These are projects that I have either finished, or that I am currently working on.
               These projects were assigned to me by Florida Atlantic University. I worked within different groups for each project.</p>
            <button onClick={()=>navigate("//")}>Go To Home Page</button>
            <Container data={data}/> 
        </div>
    )
}



export default CollegeProjects;