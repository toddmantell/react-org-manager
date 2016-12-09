import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';
import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import './node_modules/toastr/build/toastr.min.css';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import orgsReducer from './reducers/orgsReducer';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import {loadOrgs, loadOrgsAsync} from './actions/orgActions';

//initialize the redux store with a reducer (usually we would use combined reducers, but we only have one reducer)
let store = createStore(orgsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxImmutableStateInvariant(), thunk));
//Note: the window... argument is so the Chrome redux tools can see the store
store.dispatch(loadOrgsAsync());

//console.log(`Orgs dispatched to the store: `);
//console.log(store.getState());

//ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('app')
    );