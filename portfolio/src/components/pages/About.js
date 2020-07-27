import React from 'react';
import coverImage from '../../assets/img/cover.JPEG';
import userImage from '../../assets/img/jakob.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    return (
        <section className="">
            <h1 id="about">Jakob Loke</h1>
            <img src={coverImage} className="hero" alt="cover" />

            <div className="row">
                <div className="col-4 jakob-pic">
                    <img src={userImage} className="jakob-pic" alt="jakobloke" />
                </div>
                <div className="col-7 description">
                    <h4>About Me</h4>
                    <p>
                        Current Personal Trainer and fitness coach, with a background in the insurance industry that is also an aspiring web developer.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;