import React from 'react';

import Project from './Project';

import './ProjectList.less';

export default function ProjectList({ projects }) {
    return (
        <ul className="projects-list">
            {
                projects.map(project =>
                    <li key={project.name}><Project project={project} /></li>)
            }
        </ul>
    );
}

ProjectList.propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.object)
};
