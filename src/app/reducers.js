
import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import { SELECT_PROJECT_TYPE, LOAD_PROJECTS } from './actions';


const projectType = handleAction(SELECT_PROJECT_TYPE,
    (state, action) => (action.payload),
    'professional'
);


const projects = handleAction(LOAD_PROJECTS, {
    next(state, action) {
        return { ...state, [action.meta]: action.payload };
    },
    throw(state, action) {
        return { ...state, [action.meta]: action.payload };
    }
}, {
    professional: [],
    personal: []
}
);


export default combineReducers({
    projectType,
    projects
});
