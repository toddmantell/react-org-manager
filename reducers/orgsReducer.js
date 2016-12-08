import initialState from './initialState';

export default function orgsReducer (state = initialState.orgs, action) {
    switch (action.type) {
        case 'ADD_ORG'://Objct.assign creates a new copy of the object. This is needed so you don't just copy a reference.
            return [...state, Object.assign({}, action.newOrg)];
        case 'UPDATE_ORG':
            return [...state.filter(org => org.id !== action.org.orgId), Object.assign({}, action.org)];
        case 'LOAD_ORGS':
            return action.orgs;
        default:
            return state;
    }
    
}