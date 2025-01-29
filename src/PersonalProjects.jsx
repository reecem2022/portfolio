import React from "react";
import { useNavigate } from "react-router-dom";
import './App.css'
import data from './components/personal-projects.js'
import Header from './components/Header'
import Container from './components/Container'

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
            <Container data={data}/> 
        </div>    
    )
}

export default PersonalProjects;