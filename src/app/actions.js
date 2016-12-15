import GitHubProjectsService from './services/GitHubProjectService';

export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const SELECT_PROJECT_TYPE = 'SELECT_PROJECT_TYPE';

export function selectProjectType(projectType) {
    return {
        type: SELECT_PROJECT_TYPE,
        projectType
    };
}

export function loadProjects() {
    return (dispatch) => {
        const professionalPromise = projectsService.getProfessionalProjects();

        const personalPromise = projectsService.getPersonalProjects();

        Promise.all([professionalPromise, personalPromise])
            .then(results => dispatch(loadProjectsSuccess({
                professional: results[0],
                personal: results[1]
            })))
            .catch(error => dispatch(loadProjectsFailed(error)));
    };
}

function loadProjectsSuccess(projects) {
    return {
        type: LOAD_PROJECTS,
        projects
    };
}

function loadProjectsFailed(error) {
    return {
        type: LOAD_PROJECTS,
        error,
        isError: true
    };
}


const projectsService = new GitHubProjectsService();
