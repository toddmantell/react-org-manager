// import ReactDOM from 'react-dom';
// import React from 'react';
// import AddOrgForm from '../addOrg/AddOrgForm';
// import expect from 'expect';
// import TestUtils from 'react-addons-test-utils';

// //Note: this is only used for example purposes, we will use Enzyme because there is much less boilerplate
// function setup() {
//     let props = {
//         updateOrgState: () => {},
//         onSave: () => {}
//     };

//     let renderer = TestUtils.createRenderer();
//     renderer.render(<AddOrgForm {...props} />);
//     let output = renderer.getRenderOutput();

//     return {
//         props,
//         output,
//         renderer
//     };
// }

// describe('very first test to make sure our test runner is working properly', () => {
//     it('assigns an array', () => {        
//         const arr = ["React", "Is", "Awesome"];
        
//         expect(arr[2]).toBe("Awesome");
//     })
// })

// describe('AddOrgForm via React Test Utils', () => {
//     it('renders form', () => {
//         const {output} = setup();

//         expect(output.type).toBe('form');
        
//         let [div] = output.props.children;
//         expect(div.type).toBe('div');

//        //console.log(div.props.children[1].props.placeholder);
//         let {placeholder} = div.props.children[0].props;
//         expect(placeholder).toBe('Fullname');
//     })
// })