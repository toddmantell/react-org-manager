import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import AddOrgForm from '../addOrg/AddOrgForm';

//add unit tests using enzyme
function setup() {
    const props = {
        updateOrgState: () => {},
        onSave: () => {}
    };
    
    return shallow(<AddOrgForm {...props} />);
}

describe('Add Org Form Tests', () => {
    const wrapper = setup();
    
    it('renders a form tag', () => {        
        expect(wrapper.find('form').length).toBe(1);
    });

    it('finds the correct number of TextBox Components', () => {
        expect(wrapper.find('TextBox').length).toBe(2);
    });
})