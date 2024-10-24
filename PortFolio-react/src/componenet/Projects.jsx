import React from 'react'
import {Link, Outlet} from "react-router-dom";

const Projects = () => {
  return (
  <>
    <div className="project-header">
       <ul>
        <li><Link to="/projects/todo">Todo-App</Link></li>
        <li><Link to="/projects/calculator">Calculator </Link></li>
        <li><Link to="/projects/socialmedia">SocialMeadia</Link></li>
        <li><Link to="/projects/foodapp">Food-App</Link></li>
        <li><Link to="/projects/socialmedia2">Social-Meadia2</Link></li>
        <li><Link to="/projects/urlshortner">UrlShortner</Link></li>
        <li><Link to="/projects/textutils">TextUtils</Link></li>
        <li><Link to="/projects/inotebook">I-NoteBook</Link></li>
       </ul>
      </div>
      <div className='project-container'>
         <Outlet></Outlet>
      </div>
  </>
  )
}

export default Projects;
