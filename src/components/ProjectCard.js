import React from "react";
import githubLogo from "../styles/imgs/github-logo.png";
import "../styles/PortfolioCard.css";

const ProjectCard = (props) => {
    const { title, titleLink, description, img, imgDesc, githubLink } = props;

    return (

        <section className="project-card">

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