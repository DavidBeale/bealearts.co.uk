import React, { PureComponent } from 'react';

import Project from './Project';

export default class ProjectList extends PureComponent
{
    render() {
        const projects = this.props.projects;

        return (
            <ul>
                {
                    projects.map(project =>
                        <li key={project.name}><Project project={project} /></li>)
                }
            </ul>
        );
    }
}

ProjectList.propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.object)
};
