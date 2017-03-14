import * as types from './actionTypes';
//import orgs from '../orgsData.js';//only used for loading directly from orgsData.js
import OrgsApi from '../mockAPI/orgsApi.js';

//Action Creators
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

export const loadOrgs = (orgs) => {//used with the synchronous loading of orgs into the store
    return {type: types.LOAD_ORGS, orgs};
}

export const loadOrgsSuccess = (orgs) => {
    return {type: types.LOAD_ORGS, orgs};
}
//END Action Creators

//THUNKs

//Using Mock API: export const loadOrgsAsync = () => {
//     return function(dispatch) {
//         return OrgsApi.getAllOrgs().then(orgs => {
//             dispatch(loadOrgsSuccess(orgs));
//         })
//         .catch(error => {throw(error)});
//     }
// }

export const loadOrgsAsync = () => {
    return function(dispatch) {
        return fetch('http://localhost:8080/orgs')
            .then(response => response.json())
            .then(orgs => {
            dispatch(loadOrgsSuccess(orgs));
            })
            .catch(error => {throw(error)});
    }
}

// export const addNewOrgAsync = (org) => {
//     return function (dispatch) {
//         return OrgsApi.addOrg(org).then((newOrg) => {
//             dispatch(addNewOrg(newOrg));
//         }).catch((error) => {throw(error)});
//     }
// }

export const addNewOrgAsync = (org) => {
    return function (dispatch) {
        return fetch('http://localhost:8080/orgs',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(org)
        }).then(response => response.json())
        .catch(error => {throw(error)});
    }
}

export const updateOrgAsync = (org) => {
    return function(dispatch) {
        return OrgsApi.updateOrg(org).then(() => {}).catch(()=>{});//finish writing
    }
} 