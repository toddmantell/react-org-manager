import * as types from './actionTypes';
import orgs from '../orgsData.js';

export const addNewOrg = (org) => {
    return {
        type: types.ADD_ORG,
        newOrg: org
    };
}

export const updateOrg = (org) => {
    return {
        type: types.UPDATE_ORG,
        updatedOrg: org
    }
}

export const loadOrgs = () => {
    return {type: types.LOAD_ORGS, orgs};
}

// export const addOrgToOrgs = (newOrg) => {
//     dispatch(addNewOrg(newOrg));
// }

// export const updateOrgInOrgs = (updatedOrg) => {
//     dispatch(updateOrg(updatedOrg));
// }