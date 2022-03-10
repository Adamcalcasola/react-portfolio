import React from 'react';
// import image1 from '../../assets/images/follow-the-money-screenshot.png';

function Project(props) {
    const { name, link, image } = props;

    return (
        <div className="portfolio">
            <h2>{name}</h2>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="screenshot" />
            </a>
        </div>
    )
}

export default Project;