import React, { PureComponent } from 'react';

import ProjectList from '../components/ProjectList';
import ProjectNav from '../components/ProjectNav';
import GitHubProjectsService from '../services/GitHubProjectService';


export default class Projects extends PureComponent
{
    constructor(props) {
        super(props);

        this.service = new GitHubProjectsService();

        this.state = {
            projectType: 'professional',
            projects: {
                professional: [],
                personal: []
            }
        };

        this.setProjectType = this.setProjectType.bind(this);
    }

    componentDidMount() {
        this.service.getProfessionalProjects()
            .then((professional) => {
                this.setState({
                    projects: { ...this.state.projects, professional }
                });
            });

        this.service.getPersonalProjects()
            .then((personal) => {
                this.setState({
                    projects: { ...this.state.projects, personal }
                });
            });
    }

    setProjectType(type) {
        this.setState({
            projectType: type
        });
    }

    render() {
        const projects = this.state.projects;
        const projectType = this.state.projectType;

        return (
            <section>
                <ProjectNav type={projectType} onChange={this.setProjectType} />

                <ProjectList projects={projects[projectType]} />
            </section>
        );
    }
}
