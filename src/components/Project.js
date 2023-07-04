import React from "react";
import "../styles/Project.css";
import githubImg from "../styles/imgs/github-logo.png";

export default function Project(props) {

    return (
        <div className="container">
            <div className="card" id={"card" + props.id}>
                <a href={props.website} target="_blank" rel="noreferrer">
                    <h2 className="title">{props.title}</h2>
                </a>
                <p className="description">{props.description}</p>
                <img src="http://placekitten.com/300/200" alt={props.title + " sample."} className="back-img" />
                <a href={props.repo} target="_blank" rel="noreferrer" className="repo-img-back">
                    <img src={githubImg} alt="Link to the Github repository." className="repo-img" />
                </a>
            </div>
        </div>
    )
};