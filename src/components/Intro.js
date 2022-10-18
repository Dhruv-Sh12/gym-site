import React from 'react';
import './intro.css';
import Cards from './Card';
import arr from './revArr';


export default function Intro(properties) {
   
  return (
    <div>
    
    <div className="s">
        <p>Established in 1993, Freak : the gym specialises in the delivery of nationally accredited fitness and personal training qualifications.</p>

<p>AFA has assisted thousands of graduates to create rewarding careers as exercise professionals. We have delivered the SIS30321 Certificate III in Fitness and SIS40221 Certificate IV in Fitness for more than 29 years, with flexible study options allowing students to choose whether to complete their course either face-to-face or online.</p>

<p>As the leading online fitness education provider in the country, we have developed a course that is interactive, engaging and insightful, equipping you with the knowledge and skills required to become a fully-qualified Gym Instructor, Group Exercise Instructor and Personal Trainer.</p>

<p>We also work with a large range of organisations across the fitness industry to support our students throughout their entire learning journey with us, from enrolment right through to graduation.</p>
    </div>
    <div className="reason">
        <div className="image">
            <img src="https://www.fitnesseducation.edu.au/wp-content/uploads/2021/05/Why-Work-in-Fitness.webp" alt="" />
        </div>
        <div className="points">
            <h2>Reasons to work in fitness</h2>
            <ul>
                <li>Be your own boss</li>
                <li>Stay fit on the job, and do what you love</li>
                <li>Suits career changers or those coming back to work</li>
                <li>Flexibility of part-time or full-time jobs</li>
                
            </ul>
        </div>
    </div>
    <div className="rev">
        <h2>Review on Social Media</h2>
    <div className='revi'>
      {arr.map((item) => (
        <Cards key={item.id} item={item}  />
      ))}
    </div>
    </div>
    
    
</div>

  );
}

