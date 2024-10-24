import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Home = () => {
  return (

    <>
      <div class="container">

      <div class="sidebar">
        
          <h2>Sidebar</h2>
          <ul>
          <li  className='list-items'><img width="50px" height="50px" src="../src/myphoto.jpg" alt="myImgae" /><a style={{position:"relative" , bottom :"17px" , left :"5px", color :"white"}} href="#">Profile</a> </li>
          <li className="list-items"><Link to="/">Home</Link></li>
                <li className="list-items"><Link to="/about">About</Link></li>
                <li className="list-items"><Link to="/projects">Projects</Link></li>
                <li className="list-items"><Link to="learning">Learnings</Link></li>
                <li className="list-items"><Link to="institutes">Institutions</Link></li>
                <li className="list-items"><Link to="contact">Contact</Link></li>
          </ul>
        </div>

        <div class="main-content">
          <div className="nav-bar">
          <div className="fake-header"></div> 
            <div className="list">
              <ul className="list-item">
                <li  className='list-items'><img width="50px" height="50px" src="../src/myphoto.jpg" alt="myImgae" /><a style={{position:"relative" , bottom :"17px" , left :"5px", color :"white"}} href="#">Profile</a> </li>
                <li className="list-items"><Link to="/">Home</Link></li>
                <li className="list-items"><Link to="/about">About</Link></li>
                <li className="list-items"><Link to="/projects">Projects</Link></li>
                <li className="list-items"><Link to="learning">Learnings</Link></li>
                <li className="list-items"><Link to="institutes">Institutions</Link></li>
                <li className="list-items"><Link to="contact">Contact</Link></li>
              </ul>
            </div>
            <div className="form">
            <Link to="/signin">SignIn</Link>
            <Link to="signup">signUp</Link>
            </div>
          
             
            
          </div>
          <Outlet></Outlet>
        </div>
       

      </div>


    </>
  )
}

export default Home
