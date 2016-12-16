import React from 'react';

import Project from './Project';

import styles from './ProjectList.less';

export default function ProjectList({ projects }) {
    return (
        <ul className={styles.projectList}>
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
