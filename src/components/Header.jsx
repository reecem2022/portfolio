import React from 'react'
import pfp from '../assets/profile-picture.png'
import '../App.css'

const Header=()=>{
    return(
        <div className='header'>
                <div className="header-container">
                <img src={pfp} className="profile-picture" />
                <p style={{fontSize:"45px",fontWeight:"bold"}}>Mark Reece</p>
                <p>CURRENTLY UNDER CONSTRUCTION</p>
                <p>Software Engineer/Developer and Game Programmer</p>
                <p>Majoring in Computer Science, Minoring in Artifical Intelligence and Cyber Security</p>
            </div>
        </div>
    )
}

export default Header;