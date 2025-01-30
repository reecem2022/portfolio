import React from 'react'
const Container=({data})=>{

    const projects = JSON.parse(data)

    const createProjectCards=()=>{
        return projects.map((project)=>(
            <div key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <h4>{project.description}</h4>
                <video className="project-video" controls>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button className="project-button" onClick={()=>(window.open(project.link, "_blank"))}>Link</button>
            </div>
        ))
    }

    return <div className="container">{createProjectCards()}</div>
}

export default Container;