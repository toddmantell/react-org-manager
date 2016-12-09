import React from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="well">
            <h1 className="text-default">Todd's Org Manager</h1>         
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/orgs" activeClassName="active">Orgs</Link>
            {" | "}
            <Link to="/addOrg" activeClassName="active">Add Org</Link>
        </nav>
    );
}

export default Header;