import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import IndexPage from '../IndexPage';

function setup() {
    //IndexPage takes no props

    return shallow(<IndexPage />);
}

describe('IndexPage', () => {
    const wrapper = setup();

    it('should render col-md-6 in two divs', () => {
        expect(wrapper.find('div.col-md-6').length).toBe(2);    
    });
});

