import React from "react";
import resume from '../downloads/gabriel-anderson-resume.pdf';

export default function Resume() {

    return (

        <main className="main-body">
            <section className="download-section">
                <button className="download-btn" download={resume}>
                    Download Resume
                </button>
            </section>

            <section className="main-resume" id="resume">
                <h1 id="resume-name">
                    GABRIEL ANDERSON
                </h1>

                <ul>
                    <li className="resume-sub">
                        gabrielandersondev@gmail.com
                    </li>

                    <li className="resume-sub">
                        (425) 301 - 5163
                    </li>

                    <li className="resume-sub">
                        <a href="https://github.com/ChickenChamp71">
                            GitHub
                        </a>
                    </li>
                </ul>

                <hr />

                <h2>
                    Experience
                </h2>

                <div className="web-developer">
                    <h3>
                        Freelance Web Developer
                    </h3>

                    <h4>
                        <i>Remote</i> | <i>Current</i>
                    </h4>

                    <ul className="bullets">
                        <li>
                            Utilizes React to create websites for clients
                        </li>

                        <li>
                            Collaborates with web designers to produce results accurate to designer's prototype
                        </li>

                        <li>
                            Communicates with clients to define needs for their website
                        </li>
                    </ul>

                </div>

                <div className="volunteer">
                    <h3>
                        Volunteer
                    </h3>

                    <h4>
                        <i>Issaquah Library</i> | <i>Issaquah, WA</i> | <i>2016 - 2019</i>
                    </h4>

                    <ul className="bullets">
                        <li>
                            Increased teen interaction with the library as a member of the Teen Advisory Board
                        </li>

                        <li>
                            Taught library visitors and staff how to use software and general computer knowledge
                        </li>

                        <li>
                            Budgeted, co-organized, and ran a successful event at the library that showcased candy from various cultures
                        </li>

                        <li>
                            Professionally represented the library in a variety of events, including:
                        </li>

                        <ul>
                            <li>
                                The Dragon Boat Festival, a cultural celebration with traditional games and activities
                            </li>

                            <li>
                                Issaquah Welcomes You, a seminar about accessible resources around Issaquah for immigrants
                            </li>
                        </ul>
                    </ul>
                </div>

                <h2>
                    Education
                </h2>

                <div className="bootcamp">
                    <h3>
                        Full Stack Web Development Bootcamp
                    </h3>

                    <h4>
                        <i>University of Washington</i> | <i>Seattle, WA</i> | <i>March 2023 - June 2023</i>
                    </h4>

                    <ul className="bullets">
                        <li>
                            Utilized project management skills in a fast-paced environment
                        </li>

                        <li>
                            Worked with other students to produce finished group projects
                        </li>
                    </ul>
                </div>

                <div className="high-school">
                    <h3>
                        High School Diploma
                    </h3>

                    <h4>
                        <i>Gibson Ek High School</i> | <i>Issaquah, WA</i> | <i>September 2018 - June 2022</i>
                    </h4>

                </div>

                <h2>
                    Relevant Skills & Abilities
                </h2>

                <ul className="bullets">
                    <li>
                        Has full stack web development understanding and experience, including:
                    </li>

                    <ul>
                        <li>
                            HTML, CSS, & JavaScript
                        </li>

                        <li>
                            React
                        </li>

                        <li>
                            Node, Express, & REST
                        </li>

                        <li>
                            MySQL, Sequelize, MongoDB, Mongoose, & NoSQL
                        </li>
                    </ul>

                    <li>
                        Competent with Microsoft Suite
                    </li>

                    <li>
                        Communicates well with designers, has some past experience with design
                    </li>

                    <li>
                        Basic understanding of Blender (version 2.8 & onwards) and Adobe Photoshop
                    </li>

                    <li>
                        Picks up software very quickly and enjoys the learning process
                    </li>
                </ul>
            </section>
        </main>
    );
};