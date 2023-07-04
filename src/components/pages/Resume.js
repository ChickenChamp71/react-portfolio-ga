import React from "react";
import resumeFile from "../downloads/ResumeSample.docx";
import "../../styles/Resume.css";

export default function Resume() {

    return (
        <div className="sub-body">
            <h2 className="resume-title">Resume</h2>
            <div className="resume-list">
                <h4 className="download">Download my resume <a href={resumeFile} download={resumeFile}>here!</a></h4>
                <h3 className="front-end">Front-End Proficiencies:</h3>
                <ul className="front-list list">
                    <li className="front-element">HTML</li>
                    <li className="front-element">CSS</li>
                    <li className="front-element">JavaScript</li>
                    <li className="front-element">JQuery</li>
                    <li className="front-element">Responsive design</li>
                    <li className="front-element">React</li>
                    <li className="front-element">Bootstrap</li>
                </ul>
                <h3 className="back-end">Back-End Proficiencies:</h3>
                <ul className="back-list list">
                    <li className="back-element">APIs</li>
                    <li className="back-element">Node</li>
                    <li className="back-element">Express</li>
                    <li className="back-element">MySQL, Sequelize</li>
                    <li className="back-element">MongoDB, Mongoose</li>
                    <li className="back-element">REST</li>
                    <li className="back-element">GraphQL</li>
                </ul>
            </div>
        </div>
    )
};