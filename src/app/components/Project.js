import React from 'react';

import languageIcon from './languageIcon';

import styles from './Project.less';   // eslint-disable-line

export default function Project({ project }) {
    const language = project.language || 'Unknown';

    return (
        <a className={styles.project} href={project.url} target="_blank" rel="noopener noreferrer">
            <dl>
                <dt><h3><img width="26" height="26" src={languageIcon(language)} alt={language} />{project.name}</h3></dt>
                <dd>{project.description}</dd>
            </dl>
        </a>
    );
}


Project.propTypes = {
    project: React.PropTypes.shape({
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        url: React.PropTypes.string
    })
};
