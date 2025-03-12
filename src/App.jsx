import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import CollegeProjects from './CollegeProjects'
import PersonalProjects from './PersonalProjects'
import './App.css'

const App=()=>{
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/college-projects' element={<CollegeProjects />} />
        <Route path='/personal-projects' element={<PersonalProjects />} />
      </Routes>
    </Router>
  )
}
export default App
