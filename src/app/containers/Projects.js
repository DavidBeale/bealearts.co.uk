import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import ProjectList from '../components/ProjectList';
import ProjectNav from '../components/ProjectNav';

import { selectProjectType, loadProjects } from '../actions';

class Projects extends PureComponent
{
    constructor(props) {
        super(props);

        this.setProjectType = this.setProjectType.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(loadProjects());
    }

    setProjectType(projectType) {
        this.props.dispatch(selectProjectType(projectType));
    }

    render() {
        const projectType = this.props.projectType;
        const projects = this.props.projects[projectType] || [];

        return (
            <section>
                <ProjectNav type={projectType} onChange={this.setProjectType} />

                <ProjectList projects={projects} />
            </section>
        );
    }
}


Projects.propTypes = {
    dispatch: PropTypes.func.isRequired,
    projects: PropTypes.shape(),
    projectType: PropTypes.string
};


function mapStateToProps(state) {
    return state;
}


export default connect(mapStateToProps)(Projects);
