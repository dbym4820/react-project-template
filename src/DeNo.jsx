import React from 'react';
import ReactDOM from 'react-dom';
import RouteOperator from './RouteOperator';

import API from './API';

import { Link, withRouter } from 'react-router-dom';
import {
    Container, Row, Col
} from 'reactstrap';
import './index.scss';

import NovelWindow from './DeNo/NovelWindow';
import NetworkWindow from './DeNo/NetworkWindow';
import FeedbackWindow from './DeNo/FeedbackWindow';

export default class DeNo extends React.Component {

    constructor(props) {
	super(props);
	this.state = {
	    inputValue: "",
	};
    }
    

    render() {
	return (
	    <div className="DeNo">
	      <Row>
		<Col sm="4">
		  <NovelWindow />
		</Col>
		<Col sm="7">
		  <Row>
		    <NetworkWindow />
		  </Row>
		  <Row>
		    <FeedbackWindow />
		  </Row>
		</Col>
	      </Row>	
	    </div>
	);
    }
}
