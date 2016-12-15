
import { combineReducers } from 'redux';
import { SELECT_PROJECT_TYPE, LOAD_PROJECTS } from './actions';


function projectType(state = 'professional', action) {
    switch (action.type) {
    case SELECT_PROJECT_TYPE:
        return action.projectType;
    default:
        return state;
    }
}


function projects(state = {
    professional: [],
    personal: []
}, action) {
    switch (action.type) {
    case LOAD_PROJECTS:
        return { ...state, [action.projectType]: action.projects };
    default:
        return state;
    }
}


export default combineReducers({
    projectType,
    projects
});
