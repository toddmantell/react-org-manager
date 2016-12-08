import React from 'react';
import * as orgActions from '../actions/orgActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AddOrgForm from './AddOrgForm';
import {browserHistory} from 'react-router';

class AddOrgPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {org: {orgId: this.props.orgs.length + 1, orgFullName: "", orgShortName: "", isActive: false}};
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

        this.props.dispatch(orgActions.addNewOrg(this.state.org));
        this.redirect();
    }
    redirect() {
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

// function mapDispatchToProps(dispatch) {
//     return {
//         addNewOrg: dispatch(addNewOrg)
//     };
// }

export default connect(mapStatetoProps)(AddOrgPage);