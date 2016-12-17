import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';

import ProjectList from '../components/ProjectList';
import ProjectNav from '../components/ProjectNav';
import Spinner from '../components/Spinner';

import styles from './Projects.less';

import { selectProjectType, loadProjects } from '../actions';

class Projects extends PureComponent
{
    componentWillMount() {
        this.props.dispatchLoadProjects(this.props.projectType);
    }

    render() {
        const projectType = this.props.projectType;
        const projects = this.props.projects[projectType] || [];

        const isLoading = Array.isArray(projects) && projects.length === 0;
        const isError = !Array.isArray(projects);

        const retry = () => {
            this.props.dispatchLoadProjects(projectType);
        };

        return (
            <section className={styles.projects}>
                <ProjectNav type={projectType} onChange={this.props.dispatchSelectProjectType} />

                { !isLoading && !isError ? (
                    <ProjectList projects={projects} />
                ) : (
                    <div className="loading">
                        { isLoading ? (
                            <Spinner />
                        ) : (
                            <p>Failed to load Projects<br /><button className="retry" type="button" onClick={retry}>Retry</button></p>
                        )}
                    </div>
                )}
            </section>
        );
    }
}


Projects.propTypes = {
    dispatchSelectProjectType: PropTypes.func.isRequired,
    dispatchLoadProjects: PropTypes.func.isRequired,
    projects: PropTypes.shape(),
    projectType: PropTypes.string
};


function mapStateToProps(state) {
    return state;
}


export default connect(
    mapStateToProps,
    {
        dispatchSelectProjectType: selectProjectType,
        dispatchLoadProjects: loadProjects
    }
)(Projects);
