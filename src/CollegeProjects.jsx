import './App.css'
import React from "react";
import { useNavigate } from "react-router-dom"
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'
import data from './components/college-projects.js'

const CollegeProjects = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <div>
                <Header />
            </div>
        
            <h1>College Projects</h1>
            <p>
            These are projects that I have either finished, or that I am currently working on.
            These projects were assigned to me by Florida Atlantic University. I worked within different groups for each project.
            </p>
            <button onClick={()=>navigate("//")}>Go To Home Page</button>

            <Container projects={data}/> 
        </div>
    )
}

export default CollegeProjects;