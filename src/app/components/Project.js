import React, { PureComponent } from 'react';

export default class Project extends PureComponent
{
    render() {
        const project = this.props.project;

        return (
            <dl>
                <di><a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a></di>
                <dd>{project.description}</dd>
            </dl>
        );
    }
}


Project.propTypes = {
    project: React.PropTypes.shape({
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        url: React.PropTypes.string
    })
};
