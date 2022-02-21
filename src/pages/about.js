import React from 'react';
import picture from '../assets/images/Adam.jpg.jpg';

function About() {
    return (
        <section>
            <h2>About Me</h2>
            <img src ={picture} alt="Adam Calcasola"/>
            <p>
                Skilled laboratory and research and development technician with over fifteen years of experience 
                in a variety of aspects of the ophthalmic lens manufacturing industry from manufacturing, 
                instrument calibration, testing, design validation, process development, and quality control. 
                Skilled in problem solving with a passion for efficiency, learning, and surpassing goals. 
                Willing and able to travel to assist with potential customer opportunities and help address and 
                resolve customer issues on site. Resilient and focused on professional growth and opportunities 
                within a dynamic marketplace.
            </p>
        </section>
    )
}

export default About;