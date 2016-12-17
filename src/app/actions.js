import { createAction } from 'redux-actions';

import GitHubProjectsService from './services/GitHubProjectService';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const SELECT_PROJECT_TYPE = 'SELECT_PROJECT_TYPE';

export function selectProjectType(projectType) {
    return (dispatch) => {
        dispatch(loadProjects(projectType));

        dispatch(createAction(SELECT_PROJECT_TYPE)(projectType));
    };
}

export function loadProjects(projectType) {
    return (dispatch, getState) => {
        const state = getState();
        const hasProjects = Array.isArray(state.projects[projectType])
            && state.projects[projectType].length !== 0;

        if (hasProjects) return;

        dispatch(loadProjectsStarted(projectType));

        if (projectType === 'professional') {
            dispatch(loadProfessionalProjects());
        } else {
            dispatch(loadPersonalProjects());
        }
    };
}

const loadProjectsStarted = createAction(LOAD_PROJECTS,
    projectType => ({ projectType, projects: [] })
);

const loadProjectsSuccess = createAction(LOAD_PROJECTS,
    (projectType, projects) => ({ projectType, projects })
);

const loadProjectsFailed = createAction(LOAD_PROJECTS,
    (projectType, error) => {
        const result = error;
        result.projectType = projectType;
        return result;
    }
);


function loadProfessionalProjects() {
    return (dispatch) => {
        projectsService.getProfessionalProjects()
            .then(results => dispatch(loadProjectsSuccess('professional', results)))
            .catch(error => dispatch(loadProjectsFailed('professional', error)));
    };
}


function loadPersonalProjects() {
    return (dispatch) => {
        projectsService.getPersonalProjects()
            .then(results => dispatch(loadProjectsSuccess('personal', results)))
            .catch(error => dispatch(loadProjectsFailed('personal', error)));
    };
}

const projectsService = new GitHubProjectsService();
