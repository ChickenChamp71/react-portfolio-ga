import React from 'react';
import ProjectCard from './ProjectCard';
import projectInfo from './ProjectInfo';
import '../styles/Portfolio.css';

export default function Portfolio() {

    return (
        <section className='portfolio' id='portfolio'>

            <h2 className='subtitle'>
                Portfolio
            </h2>

            {projectInfo.map(project => (
                <div className='project-card-div' key={project.key}>
                    <ProjectCard
                        key={project.key}
                        title={project.title}
                        titleLink={project.titleLink}
                        description={project.description}
                        img={project.img}
                        imgDesc={project.imgDesc}
                        githubLink={project.githubLink}
                    />
                </div>
            ))}

        </section>
    );
};