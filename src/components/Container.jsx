import React from 'react'
import './Container.css'

const Container=({projects})=>{
    const createProjectCards=()=>{
        return projects.map((project)=>(
            <div key={project.name} className="project-card">
                <h2>{project.name}</h2>
                <h4>{project.used}</h4>
                <h4>{project.description}</h4>
                <video className="project-video" controls>
                    <source src={`${project.video}`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {project.link !== "disabled" && (
                    <button className="project-button" onClick={()=>(window.open(project.link, "_blank"))}>Link</button>
                )}
            </div>
        ))
    }

    return <div className="container">{createProjectCards()}</div>
}

export default Container;