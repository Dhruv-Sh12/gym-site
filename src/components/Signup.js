import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './intro.css';

export default function Signup() {
  return (
    <div class="sig">
        <div className="frm">
           <center> <form action="">
                <label htmlFor="Name">Enter Name</label><br />
                <input type="text" placeholder='First Name' /> <input type="text"  placeholder='Last Name'/><br />
                <label htmlFor="Email">Enter Email Id</label><br/>
                <input type="text" placeholder='em@il' /><br/>
                <label htmlFor="Username">Enter Username </label><br/>
                <input type="text" placeholder='username' /><br/>
                <label htmlFor="pass">Password</label><br/>
                <input type="password" placeholder='Password' /><br/>
                <label htmlFor="no"max="10" >Enter Mobile No.</label><br/>
                <input type="number" placeholder='Mobile No.' /><br/>
                <label htmlFor="opt">Select a Course</label><br/>
                <select name="" id="" placeholder='Select a Course'>
                    <option value="Nutrition">Nutrition</option>
                    <option value="Zumba">Zumba and Aerobics</option>
                    <option value="Yoga">Yoga and Meditation</option>
                </select><br /><br />
                <label htmlFor="pr">Each Course fee if Rs.1000/- only</label><br />
                <label htmlFor="upi">Enter UPI Id</label><br />
                <input type="text" placeholder='UPI Id'/><br />
                
                <Link to='../courses'>Start Your Journey</Link>
                <br />
                Already a member ? <Link to='../Login'>Login</Link>





            </form></center>
        </div>
        <Outlet/>
      
    </div>
  );
}
