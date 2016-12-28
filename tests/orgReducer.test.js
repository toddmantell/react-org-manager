import expect from 'expect';
import orgsReducer from '../reducers/orgsReducer';
import * as actionTypes from '../actions/actionTypes';


describe('Orgs Reducer Tests', () => {
    const action = {
            type: actionTypes.LOAD_ORGS,
            orgs: [{"orgId": 1, "orgFullName": "Denver1 Health Organization", "orgShortName": "Denver Health", "isActive": true},
                    {"orgId": 2, "orgFullName": "Great State Healthsystem", "orgShortName": "Great State", "isActive": false}]
        }

    it('should return 2 orgs', () => {        

        let result = orgsReducer([], action);

        expect(result.length).toBe(2);
    });

    it('should find the 1st orgs fullName', () => {
        let result = orgsReducer([], action);

        expect(result[0].orgFullName).toEqual("Denver1 Health Organization");
    });

    it('should add a new org', () => {
        const newOrg = {"orgId": 3, "orgFullName": "New Health Organization", "orgShortName": "New Health", "isActive": true};

        const localAction = {
            type: actionTypes.ADD_ORG,
            newOrg
        }

        let result = orgsReducer(action.orgs, localAction);
        
        expect(result[2].orgShortName).toEqual("New Health");
    });
});