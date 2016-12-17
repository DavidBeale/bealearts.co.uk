import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import ProjectList from '../components/ProjectList';
import ProjectNav from '../components/ProjectNav';
import Spinner from '../components/Spinner';

import styles from './Projects.less';

import { selectProjectType, loadProjects } from '../actions';

class Projects extends PureComponent
{
    constructor(props) {
        super(props);

        this.setProjectType = this.setProjectType.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(loadProjects(this.props.projectType));
    }

    setProjectType(projectType) {
        this.props.dispatch(selectProjectType(projectType));
    }

    render() {
        const projectType = this.props.projectType;
        const projects = this.props.projects[projectType] || [];

        return (
            <section className={styles.projects}>
                <ProjectNav type={projectType} onChange={this.setProjectType} />

                { projects.length === 0 ? (
                    <div className="loading">
                        <Spinner />
                    </div>
                ) : (
                    <ProjectList projects={projects} />
                )}
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
