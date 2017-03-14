import React from 'react';
import * as orgActions from '../actions/orgActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddOrgForm from './AddOrgForm';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

export class AddOrgPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {org: {orgFullName: "", orgShortName: "", isActive: false}};
        this.updateOrgState = this.updateOrgState.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    updateOrgState(event) {        
        const field = event.target.name;
        let {org} = this.state; //ES6 destructuring, equivalent to: let org = this.state.org;
        
        if (field === 'isActive') {            
            org[field] = event.target.value == 'on' ? true : false;            
        }
        else {
            org[field] = event.target.value;
        }

        return this.setState({org});//ES6 property shorthand, equivalent to this.setState({org: org})        
    }
    onSave(event) {
        event.preventDefault();

        let {org} = this.state;

        if (org.orgFullName && org.orgShortName) {

            this.props.actions.addNewOrgAsync(org)
                .then(() => {//thunks can return a promise
                    this.redirect(org.orgShortName);
                })
                .catch(error => {
                    toastr.error(error);
                });               
        }
        else {
            toastr.error("please fill out all fields");
        }
    }
    redirect(shortName) {
        this.props.actions.loadOrgsAsync();
        toastr.success(`New Org ${shortName} Added`);
        browserHistory.push('/orgs');
    }
    render() {
        return (
            <div>
                <h2>Add An Org</h2>
                <AddOrgForm updateOrgState={this.updateOrgState} onSave={this.onSave} />            
            </div>
        );
    }
}

function mapStatetoProps(state, ownProps) {
    return {
        orgs: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(orgActions, dispatch)
    };
}

export default connect(mapStatetoProps, mapDispatchToProps)(AddOrgPage);