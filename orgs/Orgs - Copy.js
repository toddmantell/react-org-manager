import React from 'react';
import orgs from './orgsData.js';
//mport addOrg from './addOrg';

class OrgsPage extends React.Component {
    constructor() {
        super();
        this.state = {orgs: []};

//For presentation: use redux to dispatch an action and add an Org
        this.iterate = this.iterate.bind(this);        
    }
    componentWillMount() {//componentWillMount is a lifecycle method that fires before the component is rendered to the DOM      
        console.log("Retrieving Orgs in componentWillMount()");

        this.setState({orgs});//this is ES6 shorthand and assigns the imported orgs to this.state.orgs (same as this.state.orgs: orgs)              
    }
    componentDidMount() {//Fires after the component is rendered to the DOM
        if (this.state.orgs.length> 0) console.log(`# Orgs Retrieved: ${this.state.orgs.length}`);
        else console.log("Error: No orgs retrieved");
    }
    iterate(item) {
        return (<tr key = {item.orgId}>
                    <td>{item.orgId}</td>
                    <td>{item.orgFullName}</td>
                    <td>{item.orgShortName}</td>
                    <td>{item.isActive.toString().toUpperCase()}</td>
                </tr>);
    }
    render() {
        return (
            <main>
                <h1>Orgs</h1>
                <div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td className="text-primary">Org Id</td>
                                <td className="text-primary">Org Fullname</td>
                                <td className="text-primary">Org Shortname</td>
                                <td className="text-primary">Is Active</td>                                
                            </tr>                            
                        </thead>
                        <tbody>                  
                            {this.state.orgs.map(this.iterate)}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }  
}

function mapStateToProps(state) {
    return {
        orgs: state.orgs
    }
}

export default OrgsPage;