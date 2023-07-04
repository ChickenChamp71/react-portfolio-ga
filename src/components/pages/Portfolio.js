import React from "react";
import Project from "../Project";
import "../../styles/Portfolio.css";

const projects = [
    {
        id: 1,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    },
    {
        id: 2,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    },
    {
        id: 3,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    },
    {
        id: 4,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    },
    {
        id: 5,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    },
    {
        id: 6,
        title: 'sample',
        repo: 'http://github.com/chickenchamp71',
        website: 'http://youtube.com',
        description: 'this is a sample'
    }
];

export default function Portfolio() {

    return (
        <div className="port-body">
            <Project id={projects[0].id} title={projects[0].title} repo={projects[0].repo} website={projects[0].website} description={projects[0].description} />
            <Project id={projects[1].id} title={projects[1].title} repo={projects[1].repo} website={projects[1].website} description={projects[1].description} />
            <Project id={projects[2].id} title={projects[2].title} repo={projects[2].repo} website={projects[2].website} description={projects[2].description} />
            <Project id={projects[3].id} title={projects[3].title} repo={projects[3].repo} website={projects[3].website} description={projects[3].description} />
            <Project id={projects[4].id} title={projects[4].title} repo={projects[4].repo} website={projects[4].website} description={projects[4].description} />
            <Project id={projects[5].id} title={projects[5].title} repo={projects[5].repo} website={projects[5].website} description={projects[5].description} />
        </div>
    )
};