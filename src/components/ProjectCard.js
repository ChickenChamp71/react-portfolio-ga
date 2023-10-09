import React from "react";
import githubLogo from "../styles/imgs/github-logo.png";

const ProjectCard = (props) => {
    const { title, titleLink, description, img, imgDesc, githubLink } = props;

    return (

        <section className="project-card">

            <img src={img} alt={imgDesc} />

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

            <a href={githubLink}>
                <img src={githubLogo} alt="gitub logo" />
            </a>

        </section>
    );
};

export default ProjectCard;