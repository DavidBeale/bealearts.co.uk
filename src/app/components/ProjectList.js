import React from 'react';
import PropTypes from 'prop-types';

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
    projects: PropTypes.arrayOf(PropTypes.shape()).isRequired
};
