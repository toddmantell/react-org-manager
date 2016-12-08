import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class OrgsPage extends React.Component {
    constructor() {
        super();

        this.iterate = this.iterate.bind(this);
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
        const {orgs} = this.props;//destructured assignment of the orgs received in mapStateToProps
        return (
            <main>
                <h1>Orgs</h1>
                <Link to="/addOrg" activeClassName="active" className="btn btn-primary">Add Org</Link>
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
                            {this.props.orgs.map(this.iterate)}
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }  
}

function mapStateToProps(state, ownProps) {
    return {
        orgs: state
    }
}

export default connect(mapStateToProps)(OrgsPage);