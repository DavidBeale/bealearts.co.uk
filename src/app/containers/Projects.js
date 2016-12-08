import React, { PureComponent } from 'react';

import ProjectList from '../components/ProjectList';
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
                <nav>
                    <ul>
                        <li><button onClick={() => this.setProjectType('professional')}>Professional</button></li>
                        <li><button onClick={() => this.setProjectType('personal')}>Personal</button></li>
                    </ul>
                </nav>

                <ProjectList projects={projects[projectType]} />
            </section>
        );
    }
}
