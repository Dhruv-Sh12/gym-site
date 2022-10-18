import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './intro.css';

export default function Login() {
  return (
    <div class="log">
    <div className="frm">
        <center><form action="">
            <label htmlFor="Name">Enter Name</label><br />
            <input type="text" placeholder='First Name' required/> <input type="text"  placeholder='Last Name'/><br />
            
            <label htmlFor="Username">Enter Username Id</label><br/>
            <input type="text" placeholder='username' required/><br/>
            <label htmlFor="pass">Password</label><br/>
            <input type="password" placeholder='Password' required /><br/>
           
            <Link to='../'>Login</Link>
            




        </form></center>
    </div>
    <Outlet/>
  
</div>
  );
}
