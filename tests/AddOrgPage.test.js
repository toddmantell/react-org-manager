import React from 'react';
import {Provider} from 'react-redux';
import {AddOrgPage} from '../addOrg/AddOrgPage';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

function setup() {
    const props = {
        orgs: [{"orgId": 1, "orgFullName": "Denver Health Organization", "orgShortName": "Denver Health", "isActive": true},
        {"orgId": 2, "orgFullName": "Great State Healthsystem", "orgShortName": "Great State", "isActive": false}]
    }

    return mount(<AddOrgPage />);

    //return shallow(<AddOrgPage />);
}

describe('Add Org Page', () => {
    let wrapper = setup();

    it('should render the h2', () => {
        expect(wrapper.find('h2').length).toBe(1);
    });

    it('should render the form', () => {
        expect(wrapper.find('form').length).toBe(1);
    });

})