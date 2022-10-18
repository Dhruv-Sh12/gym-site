import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './components/intro.css';

export default function Head() {
  return (
    <div className='intro'>
    <div className="navbar">
    <i class="fa-sharp fa-solid fa-dumbbell fa-4x"></i>
        <Link to="/"><i className="fa-solid fa-house "></i></Link>
       
        <Link to="courses">Courses</Link>
        <Link to="Signup">Join a Course</Link>
        <Link to="Login">Login</Link>
       
    </div>
    <h1 className='head'>
        Start Your fitness <br /> journey with <br /> Freak: The Gym


    </h1>
    
    <Outlet/>
</div>

  );
}
