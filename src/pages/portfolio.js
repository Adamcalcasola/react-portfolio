import React from 'react';
import Project from '../components/Project';
import Image1 from '../assets/images/obsessify-screenshot.png';
import Image2 from '../assets/images/follow-the-money-screenshot.png';
import Image3 from '../assets/images/tech-blog-screenshot.png';
import Image4 from '../assets/images/trackend-screenshot.png';
import Image5 from '../assets/images/weather-dashboard-screenshot.png';


function Portfolio() {
    const projects = [
        {
            name: 'Obsessify',
            link: 'https://obsessify.herokuapp.com/',
            image: Image1
        },
        {
            name: 'Follow the Money',
            link: 'https://adamcalcasola.github.io/follow-the-money/',
            image: Image2
        },
        {
            name: 'Tech Blog',
            link: 'https://morning-bastion-16747.herokuapp.com/',
            image: Image3
        },
        {
            name: 'Trackend',
            link: 'https://trackend-project.herokuapp.com/',
            image: Image4
        },
        {
            name: 'Weather Dashboard',
            link: "https://adamcalcasola.github.io/weather-dashboard/",
            image: Image5
        }
    ];

    return (
        <section className="portfolio">
            <h2>Portfolio</h2>
            {projects.map(project => (
                <Project 
                    name={project.name}
                    link={project.link}
                    image={project.image}
                    />

            )

            )}
        </section>
    )
}

export default Portfolio;