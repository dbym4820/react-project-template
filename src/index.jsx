import React from 'react';
import ReactDOM from 'react-dom';
import RouteOperator from './RouteOperator';

import { Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { Row } from 'reactstrap';

import Profile from './Profile';

import NavBar from './NavBar/NavBar';

import DeNo from './DeNo';

import createBrowserHistory from './history';
import './index.scss';

const serviceWorker = require('./serviceWorker');

export default class DeNoHypoReason extends React.Component {
    constructor(props){
	super(props);
    }
    
    render() {
        return (
	    <Router history={new createBrowserHistory()}>
	      <div className="Index">
		<div className="container-fluid rootContainer">
		  <NavBar />
		    <Switch>
		      <Route exact path={RouteOperator.urlRoute("")} component={DeNo} />
		      <Route exact path={RouteOperator.urlRoute("profile")} component={Profile} />
		    </Switch>
		  </div>
		</div>
	    </Router>
        );
    }
}

ReactDOM.render(<DeNoHypoReason />, document.getElementById('applicationRoot'));

serviceWorker.unregister();
