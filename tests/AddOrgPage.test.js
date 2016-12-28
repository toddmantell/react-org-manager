import React from 'react';
import AddOrgPage from '../addOrg/AddOrgPage';
import expect from 'expect';
import {mount, shallow} from 'enzyme';

function setup() {
    const props = {

    }

    return shallow(<AddOrgPage {...props}/>);
}