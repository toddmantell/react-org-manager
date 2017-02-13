import expect from 'expect';
import * as actionTypes from '../actions/actionTypes';
import * as orgActions from '../actions/orgActions';

describe('Action Creators', () => {

    it('should return orgs on loadOrgs', () => {
        const orgs =  [{"orgId": 1, "orgFullName": "Denver1 Health Organization", "orgShortName": "Denver Health", "isActive": true},
                    {"orgId": 2, "orgFullName": "Great State Healthsystem", "orgShortName": "Great State", "isActive": false}];

        let expected = {
            type: actionTypes.LOAD_ORGS,
            orgs
        };

        let actual = orgActions.loadOrgs(orgs);

        expect(actual.type).toEqual('LOAD_ORGS');
        expect(actual.orgs.length).toBe(2);
    });

    it('should add an org', () => {
        let org =  {"orgId": 3, "orgFullName": "Denver1 Health Organization", "orgShortName": "Denver Health", "isActive": true};

        let expected = {
            type: actionTypes.ADD_ORG,
            org
        }

        let actual = orgActions.addNewOrg(org);

        expect(actual.type).toEqual('ADD_ORG');
        expect(actual.newOrg.orgId).toBe(3);
    });
});