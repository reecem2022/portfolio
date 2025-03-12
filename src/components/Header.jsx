import React from 'react'
import './Header.css'

const Header=()=>{
    return(
        <div className='header'>
            <div className="header-container">
                <img src="public/profile-picture.png" className="profile-picture" />
                <p className='home-name'>Mark Reece</p>
                {/*<p>CURRENTLY UNDER CONSTRUCTION</p>*/}
                <p className='info'>Software Engineer/Developer and Game Programmer Majoring in Computer Science</p>
                <p className='info'>Minoring in Artifical Intelligence and Cyber Security</p>
            </div>
        </div>
    )
}

export default Header;