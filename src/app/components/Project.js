import React from 'react';
import languageIcon from './languageIcon';

require('./Project.less');

export default function Project(props) {
    const project = props.project;

    const language = project.language || 'Unknown';

    return (
        <dl className="project">
            <dt><h3><img width="26" height="26" src={languageIcon(language)} alt={language} /> <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></h3></dt>
            <dd>{project.description}</dd>
        </dl>
    );
}


Project.propTypes = {
    project: React.PropTypes.shape({
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        url: React.PropTypes.string
    })
};
