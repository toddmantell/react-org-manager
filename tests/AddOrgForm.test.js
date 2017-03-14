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

describe('Add Org Form', () => {
    const wrapper = setup();
    
    // it('should render a form tag', () => {        
    //     
    // });

    // it('should find the correct number of TextBox Components', () => {
    //     
    // });
})