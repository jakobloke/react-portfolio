import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () => (
    <div>
        <h1 className="resume-list">Resume</h1>

        <div className="resume-link">
            <a href="https://drive.google.com/file/d/1iMOSnWgGvZ7b6h47DR1QiSirwag8i5iu/view?usp=sharing" target="blank" alt="Resume">Check out my Resume</a>
        </div>

        <div className="skills">
            <div>
                <h4 className="">Skills</h4>
            </div>

            <div>
                <p>Member of a Full Stack web dev program that includes front-end and back-end development</p>
            </div>

            <div>
                <h5 className="header-resume">Front-End Based Tech</h5>
            </div>
            <div>
                <ul>HTML/CSS</ul>
                <ul>JavaScript</ul>
                <ul>Bootstrap</ul>
                <ul>React</ul>
            </div>
            <div>
                <h5 className="header-resume">Back-End Based Tech</h5>
            </div>
            <div>
                <ul>MySQL</ul>
                <ul>MongoDB</ul>
                <ul>Express.js</ul>
                <ul>API</ul>
            </div>
        </div>
    </div>
);

export default Resume;