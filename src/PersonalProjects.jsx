import './App.css'
import React from "react";
import { useNavigate } from "react-router-dom"
import data from './components/personal-projects.js'
import Header from './components/Header.jsx'
import Container from './components/Container.jsx'

const PersonalProjects = () => {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Header />
            <h1>Personal Projects</h1>
            <p>These personal projects are projects that I have either finished, or that are still in development.
               These projects range from software that fulfills a purpose, to video games that I'm working on.
            </p>
            <button onClick={()=>navigate("//")}>Go To Home Page</button>
            <Container projects={data}/> 
        </div>    
    )
}

export default PersonalProjects;