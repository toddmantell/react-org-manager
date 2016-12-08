import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import IndexPage from './IndexPage';
import OrgsPage from './orgs/Orgs';
import AddOrgPage from './addOrg/AddOrgPage';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={IndexPage} />
        <Route path="orgs" component={OrgsPage} />
        <Route path="addOrg" component={AddOrgPage} />    
    </Route>
);  

export default routes;