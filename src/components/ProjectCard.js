import React, { useEffect, useRef, useState } from "react";
import githubLogo from "../styles/imgs/github-logo.png";
import "../styles/PortfolioCard.css";

const ProjectCard = (props) => {
    const { id, title, titleLink, description, img, imgDesc, githubLink } = props;
    const [isTarget, setTarget] = useState(false);

    useEffect(() => {
        let handler = (e) => {

            if (e.target.id === id) {
                setTarget(true);
                return;
            }
        }
    })

    return (

        <section className="project-card" id={id}>

            <img src={img} alt={imgDesc} className="card-img" />

            <div className="card-text">
                <h3>
                    <a href={titleLink} target="_blank" rel="noreferrer">
                        {title}
                    </a>
                </h3>

                <p>
                    {description}
                </p>
            </div>

            <a href={githubLink} className="github-img-link">
                <img src={githubLogo} alt="gitub logo" className="github-img" />
            </a>

        </section>
    );
};

export default ProjectCard;